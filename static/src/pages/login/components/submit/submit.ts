import { v4 as makeUUID } from 'uuid';
import Block from '../../../../utils/Block';

type IProps = {
  text: string,
  events?: Record<string, () => void>,
}

class Submit extends Block {
  props: IProps;

  _id: string;

  constructor(props: IProps) {
    super('button', props);
    this._id = makeUUID();
    this.wrapperStyles = 'login__buttom';
    this.setWrapperAttribute('type', 'submit');
  }

  componentDidUpdate() {
    return true;
  }

  render() {
    return `<span>${this.props.text}</span>`;
  }
}

export default Submit;
