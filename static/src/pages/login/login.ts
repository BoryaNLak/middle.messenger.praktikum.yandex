import tmpl from './login.tml';
import Block from '../../utils/Block';

type IProps = {
  loginInput: HTMLInputElement,
  passwordInput: HTMLInputElement,
}

class Login extends Block {
  props: IProps;

  constructor(props: IProps) {
    super('div', props);
    this.props = props;
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}

export default Login;
