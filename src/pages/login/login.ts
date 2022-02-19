import { v4 as makeUUID } from 'uuid';
import tmpl from './login.tml';
import Block from '../../utils/Block';
import LoginForm from './components/forms/login';
import { Link } from '../../utils/Router';
import { PATHS } from '../../utils/constants';

type IProps = {
  loginInput: HTMLInputElement,
  passwordInput: HTMLInputElement,
  events?: Record<string, () => void>,
}

class Login extends Block {
  props: IProps;

  _id: string;

  children: {
    form: LoginForm,
    signupLink: Link,
  };

  constructor(props = {}) {
    super('section', props);
    this._id = makeUUID();
    this.wrapperStyles = 'login';
    this.children.form = new LoginForm({
      handleSubmit: (formData) => {
        console.log(formData);
      },
    });

    this.children.signupLink = new Link({
      text: 'Нет аккаунта?',
      to: PATHS.SIGNUP_PATH,
      cssClass: 'login__link',
    });
  }

  render() {
    return this.compile(tmpl, {
      ...this.props,
      signupLink: this.children.signupLink,
    });
  }
}

export default Login;
