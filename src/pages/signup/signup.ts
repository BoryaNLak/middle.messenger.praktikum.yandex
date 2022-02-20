import { v4 as makeUUID } from 'uuid';
import tmpl from './signup.tml';
import Block from '../../utils/Block';
import SignupForm from './components/forms/signup/signupForm';
import { authApi } from '../../utils/Api';
import { Link } from '../../utils/Router';
import { PATHS } from '../../utils/constants';
import { handleError } from '../../utils/Error/utils';

function handleSignup(data) {
  authApi.signup(data)
    .then((data) => {
      console.log('You successfully signup', data);
    })
    .catch(handleError);
}

class Signup extends Block {
  _id: string;

  children: {
    form: SignupForm,
    loginLink: Link,
  };

  constructor(props = {}) {
    super('section', props);
    this._id = makeUUID();
    this.wrapperStyles = 'signup';
    this.children.form = new SignupForm({
      handleSubmit: (formData) => {
        console.log(formData);
        handleSignup(formData);
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

export default Signup;
