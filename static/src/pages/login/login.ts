import { v4 as makeUUID } from 'uuid';
import tmpl from './login.tml';
import Block from '../../utils/Block';
import LoginForm from './components/forms/login';

type IProps = {
  loginInput: HTMLInputElement,
  passwordInput: HTMLInputElement,
}

class Login extends Block {
  props: IProps;

  _id: string;

  children: {
    form: LoginForm,
  };

  constructor(props: IProps) {
    super('section', props);
    this._id = makeUUID();
    this.wrapperStyles = 'login';
    this.children.form = new LoginForm({});
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}

export default Login;
