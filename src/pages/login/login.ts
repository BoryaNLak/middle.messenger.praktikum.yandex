import { v4 as makeUUID } from 'uuid';
import tmpl from './login.tml';
import Block from '../../utils/Block';
import LoginForm from './components/forms/login';
import Router, { Link } from '../../utils/Router';
import { PATHS } from '../../utils/constants';
import { UserController, TLoginData, TStore } from '../../controllers';
import { connect } from '../../utils/Store';

function mapStateToProps(state: TStore) {
  return {};
}

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

  constructor(tag: string, props = {}) {
    super('section', props);
    this._id = makeUUID();
    this.wrapperStyles = 'login';
    this.children.form = new LoginForm({
      handleSubmit: (formData: TLoginData) => {
        UserController.login(formData)
          .then(UserController.getInitialData)
          .then(() => {
            Router.go(PATHS.MESSENGER_PATH);
          })
          .catch(UserController.handleError);
      },
    });

    this.children.signupLink = new Link({
      text: 'Нет аккаунта?',
      to: PATHS.SIGNUP_PATH,
      cssClass: 'login__link',
    });
  }

  componentDidMount(oldProps: { [x: string]: any; }): void {
    UserController.checkAuthorization();
  }

  render() {
    return this.compile(tmpl, {
      ...this.props,
      signupLink: this.children.signupLink,
    });
  }
}

export default connect(Login, mapStateToProps);
