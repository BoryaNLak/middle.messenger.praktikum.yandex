import { v4 as makeUUID } from 'uuid';
import Block from '../../utils/Block';

type IProps = {
  text: string,
  style: string
}

class ErrorMessage extends Block {
  props: IProps;

  _id: string;

  constructor(props: IProps) {
    super('div', props);
    this._id = makeUUID();
  }

  componentDidUpdate(): boolean {
    return true;
  }

  render() {
    return `<span class="error ${this.props.style}">${this.props.text}</span>`;
  }
}

export default ErrorMessage;
