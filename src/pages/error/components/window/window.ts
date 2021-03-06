import { v4 as makeUUID } from 'uuid';
import tmpl from './window.tml';
import Block from '../../../../utils/Block';
import { Link } from '../../../../utils/Router';

type IProps = {
  number: number,
  message: string,
  link: Link,
  events?: Record<string, () => void>
}

class Window extends Block {
  _id: string;

  constructor(props: IProps) {
    super('main', props);
    this._id = makeUUID();
    this.wrapperStyles = 'error-window';
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}

export default Window;
