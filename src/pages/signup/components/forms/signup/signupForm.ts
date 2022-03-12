import { v4 as makeUUID } from 'uuid';
import tmpl from './signupForm.tml';
import Block from '../../../../../utils/Block';
import InputCredentials from '../../../../../components/inputCredentials/inputCredentials';
import Submit from '../../submit/submit';
import { inputsDataSignup } from '../../../../../utils/constants';
import FormStore from '../../../../../utils/FormStore';
import formValidator from '../../../../../utils/FormValidator';

const FORM_NAME = 'signupForm';

const localStore = FormStore.initFormStore(FORM_NAME);

const validation = (values: Record<string, string | FileList>): Record<string, string> => {
  const errors: Record<string, string> = {};
  if (values[inputsDataSignup[5].name] !== values[inputsDataSignup[6].name]) {
    errors[inputsDataSignup[6].name] = inputsDataSignup[6].error_message;
    errors[inputsDataSignup[5].name] = inputsDataSignup[6].error_message;
  }
  return errors;
};

type IProps = {
  handleSubmit: (formData: Record<string, string | FileList>) => void,
  events?: Record<string, () => void>
}

class SignupForm extends Block {
  props: IProps;

  _id: string;

  wrapperStyles: string;

  children: {
    emailInput: InputCredentials,
    loginInput: InputCredentials,
    firstNameInput: InputCredentials,
    secondNameInput: InputCredentials,
    phoneInput: InputCredentials,
    passwordInput: InputCredentials,
    confirmPasswordInput: InputCredentials,
    submit: Submit,
  };

  constructor(props: IProps) {
    super('form', props);
    this._id = makeUUID();
    this.wrapperStyles = 'signup__form';
    this.children.emailInput = new InputCredentials({
      ...inputsDataSignup[0],
      onInput: (value) => {
        localStore.onInput(inputsDataSignup[0].name, value);
      },
    });
    this.children.loginInput = new InputCredentials({
      ...inputsDataSignup[1],
      onInput: (value) => {
        localStore.onInput(inputsDataSignup[1].name, value);
      },
    });
    this.children.firstNameInput = new InputCredentials({
      ...inputsDataSignup[2],
      onInput: (value) => {
        localStore.onInput(inputsDataSignup[2].name, value);
      },
    });
    this.children.secondNameInput = new InputCredentials({
      ...inputsDataSignup[3],
      onInput: (value) => {
        localStore.onInput(inputsDataSignup[3].name, value);
      },
    });
    this.children.phoneInput = new InputCredentials({
      ...inputsDataSignup[4],
      onInput: (value) => {
        localStore.onInput(inputsDataSignup[4].name, value);
      },
    });
    this.children.passwordInput = new InputCredentials({
      ...inputsDataSignup[5],
      onInput: (value) => {
        localStore.onInput(inputsDataSignup[5].name, value);
      },
    });
    this.children.confirmPasswordInput = new InputCredentials({
      ...inputsDataSignup[6],
      onInput: (value) => {
        localStore.onInput(inputsDataSignup[6].name, value);
      },
    });
    this.children.submit = new Submit({ text: 'Зарегистрироваться' });
    this.setWrapperAttribute('novalidate', 'true');
    this.setProps({
      events: {
        submit: (evt: Event) => {
          evt.preventDefault();
          const formData = localStore.getData();
          const formChildren = this.children;
          const isFormValid = formValidator(formChildren, validation(formData));
          if (isFormValid) {
            this.props.handleSubmit(formData);
          }
        },
      },
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}

export default SignupForm;
