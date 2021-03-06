import { v4 as makeUUID } from 'uuid';
import tmpl from './signup.tml';
import Block from '../../utils/Block';
import SignupForm from './components/forms/signup/signupForm';
import { Link } from '../../utils/Router';
import { PATHS } from '../../utils/constants';
import { UserController, TSignup, TStore } from '../../controllers';
import { connect } from '../../utils/Store';

function mapStateToProps(state: TStore) {
  return {};
}

class Signup extends Block {
  _id: string;

  children: {
    form: SignupForm,
    loginLink: Link,
  };

  constructor(tag: string, props = {}) {
    super('section', props);
    this._id = makeUUID();
    this.wrapperStyles = 'signup';
    this.children.form = new SignupForm({
      handleSubmit: (formData: TSignup) => {
        UserController.signup(formData);
      },
    });
    this.children.loginLink = new Link({
      text: 'Войти',
      to: PATHS.LOGIN_PATH,
      cssClass: 'signup__link',
    });
  }

  render() {
    return this.compile(tmpl, {
      ...this.props,
      loginLink: this.children.loginLink,
    });
  }
}

export default connect(Signup, mapStateToProps);
