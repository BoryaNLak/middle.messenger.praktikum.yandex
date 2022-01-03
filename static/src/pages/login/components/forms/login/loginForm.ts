import { v4 as makeUUID } from 'uuid';
import tmpl from './loginForm.tml';
import Block from '../../../../../utils/Block';
import InputCredentials from '../../../../../components/inputCredentials/inputCredentials';
import Submit from '../../submit/submit';
import { inputsDataLogin } from '../../../../../utils/constants';

type IProps = {}

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
    this.children.loginInput = new InputCredentials({ ...inputsDataLogin[0] });
    this.children.passwordInput = new InputCredentials({ ...inputsDataLogin[1] });
    this.children.submit = new Submit({ text: 'Войти' });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}

export default LoginForm;
