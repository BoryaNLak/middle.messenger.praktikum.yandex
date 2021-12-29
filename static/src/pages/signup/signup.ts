import tmpl from './signup.tml';
import Block from '../../utils/Block';

type IProps = {
  emailInput: HTMLInputElement,
  loginInput: HTMLInputElement,
  firstNameInput: HTMLInputElement,
  secondNameInput: HTMLInputElement,
  phoneInput: HTMLInputElement,
  passwordInput: HTMLInputElement,
  confirmPasswordInput: HTMLInputElement,
}

class Signup extends Block {
  props: IProps;

  constructor(props: IProps) {
    super('div', props);
    this.props = props;
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}

export default Signup;
