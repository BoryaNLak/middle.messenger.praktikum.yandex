import { v4 as makeUUID } from 'uuid';
import tmpl from './login.tml';
import Block from '../../utils/Block';
import LoginForm from './components/forms/login';
import { Link } from '../../utils/Router';
import { authApi } from '../../utils/Api';
import { PATHS } from '../../utils/constants';
import { handleError } from '../../utils/Error/utils';

function handleLogin(login: string, password: string) {
  authApi.getUser({ login, password })
    .then((data) => {
      console.log('You successfully login', data);
    })
    .catch(handleError);
};

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
        console.log('submit by loginform', formData);
        handleLogin(formData.login, formData.password);
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
