import { v4 as makeUUID } from 'uuid';
import tmpl from './window.tml';
import Block from '../../../../utils/Block';

type IProps = {
  number: number,
  message: string,
}

class Window extends Block {
  props: { number: number,
           message: string,
          };

  _id: string;

  constructor(props: IProps) {
    super('main', props);
    this.props = props;
    this._id = makeUUID();
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}

export default Window;
