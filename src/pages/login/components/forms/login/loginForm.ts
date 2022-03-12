import { v4 as makeUUID } from 'uuid';
import tmpl from './loginForm.tml';
import Block from '../../../../../utils/Block';
import InputCredentials from '../../../../../components/inputCredentials/inputCredentials';
import Submit from '../../submit/submit';
import { inputsDataLogin } from '../../../../../utils/constants';
import FormStore from '../../../../../utils/FormStore';
import formValidator from '../../../../../utils/FormValidator';

const FORM_NAME = 'loginForm';

const localStore = FormStore.initFormStore(FORM_NAME);

type IProps = {
  handleSubmit: (formData: Record<string, string | FileList>) => void,
  events?: Record<string, () => void>,
}

class LoginForm extends Block {
  props: IProps;

  _id: string;

  wrapperStyles: string;

  children: {
    loginInput: InputCredentials,
    passwordInput: InputCredentials,
    submit: Submit,
  };

  constructor(props: IProps) {
    super('form', props);
    this._id = makeUUID();
    this.wrapperStyles = 'login__form';
    this.children.loginInput = new InputCredentials({
      ...inputsDataLogin[0],
      onInput: (value) => {
        localStore.onInput('login', value);
      },
    });
    this.children.passwordInput = new InputCredentials({
      ...inputsDataLogin[1],
      onInput: (value) => {
        localStore.onInput('password', value);
      },
    });
    this.children.submit = new Submit({ text: 'Войти' });

    this.setProps({
      events: {
        submit: (evt: Event) => {
          evt.preventDefault();
          const formChildren = this.children;
          const isFormValid = formValidator(formChildren);
          if (isFormValid) {
            const formData = localStore.getData();
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

export default LoginForm;
