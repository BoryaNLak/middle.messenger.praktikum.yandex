import { v4 as makeUUID } from 'uuid';
import tmpl from './contact.tml';
import Block from '../../../../utils/Block';
import { YANDEX_RESOURCES } from '../../../../utils/constants';

type IData = {
  avatar?: string,
  title: string,
  content?: string,
  time?: string,
  unread_count?: number,
  events: {
    click: () => void
  }
}

class Contact extends Block {
  props: IData;

  _id: string;

  constructor(props: IData) {
    super('div', props);
    this._id = makeUUID();
    this.wrapperStyles = 'contact';
    this.setWrapperStyles(this.wrapperStyles);
  }

  componentDidUpdate(): boolean {
    return true;
  }

  render() {
    return this.compile(tmpl, {
      ...this.props,
      avatar: `${YANDEX_RESOURCES}${this.props.avatar}`,
    });
  }
}

export default Contact;
