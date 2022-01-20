import { v4 as makeUUID } from 'uuid';
import tmpl from './contact.tml';
import Block from '../../../../utils/Block';

type IData = {
  photo: string,
  name: string,
  last_message: string,
  date: string,
  unread_messages: string,
}

class Contact extends Block {
  props: IData;

  _id: string;

  constructor(props: IData) {
    super('div', props);
    this.props = props;
    this._id = makeUUID();
  }

  componentDidUpdate(): boolean {
    return true;
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}

export default Contact;
