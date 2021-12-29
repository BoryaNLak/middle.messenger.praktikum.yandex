import { v4 as makeUUID } from 'uuid';
import tmpl from './message.tml';
import Block from '../../../../utils/Block';

type IData = {
  text: string,
  date: string,
}

class Message extends Block {
  props: IData;

  _id: string;

  constructor(props: IData) {
    super('div', props);
    this.props = props;
    this._id = makeUUID();
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}

export default Message;
