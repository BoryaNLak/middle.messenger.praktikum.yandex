import { v4 as makeUUID } from 'uuid';
import tmpl from './login.tml';
import Block from '../../utils/Block';
import LoginForm from './components/forms/login';

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
  };

  constructor(props: IProps) {
    super('section', props);
    this._id = makeUUID();
    this.wrapperStyles = 'login';
    this.children.form = new LoginForm({
      handleSubmit: (formData) => {
        console.log(formData);
      },
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}

export default Login;
