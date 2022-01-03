import { v4 as makeUUID } from 'uuid';
import tmpl from './signup.tml';
import Block from '../../utils/Block';
import SignupForm from './components/forms/signup/signupForm';

class Signup extends Block {
  _id: string;

  children: {
    form: SignupForm,
  };

  constructor(props = {}) {
    super('section', props);
    this._id = makeUUID();
    this.wrapperStyles = 'signup';
    this.children.form = new SignupForm({
      events: {
        submit: (evt: Event) => {
          console.log('submit signup');
          evt.preventDefault();
        },
      },
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}

export default Signup;
