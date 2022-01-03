import { v4 as makeUUID } from 'uuid';
import tmpl from './signupForm.tml';
import Block from '../../../../../utils/Block';
import InputCredentials from '../../../../../components/inputCredentials/inputCredentials';
import Submit from '../../submit/submit';
import { inputsDataSignup } from '../../../../../utils/constants';

type IProps = {
  events: {
    submit: (evt: Event) => void
  }
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
    this.children.emailInput = new InputCredentials({ ...inputsDataSignup[0] });
    this.children.loginInput = new InputCredentials({ ...inputsDataSignup[1] });
    this.children.firstNameInput = new InputCredentials({ ...inputsDataSignup[2] });
    this.children.secondNameInput = new InputCredentials({ ...inputsDataSignup[3] });
    this.children.phoneInput = new InputCredentials({ ...inputsDataSignup[4] });
    this.children.passwordInput = new InputCredentials({ ...inputsDataSignup[5] });
    this.children.confirmPasswordInput = new InputCredentials({ ...inputsDataSignup[6] });
    this.children.submit = new Submit({ text: 'Зарегистрироваться' });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}

export default SignupForm;
