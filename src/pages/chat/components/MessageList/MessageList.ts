import { v4 as makeUUID } from 'uuid';
import Block from '../../../../utils/Block';
import tmpl from './MessageList.tml';
import Message from '../message';
import { Tmessage } from '../../../../controllers';

type TMessageList = {
  messagesData: Tmessage[],
}

class MessageList extends Block {
  children: {
    messages: Message[],
  };

  constructor(props: TMessageList) {
    super('div', props);
    this._id = makeUUID();
    this.resetStyleStateMessages = this.resetStyleStateMessages.bind(this);

    this.wrapperStyles = 'chat__block chat__block_type_messages';
    this.children.messages = this.props.messagesData.map((item: Tmessage) => (new Message({
      ...item,
      handleReseteStyle: this.resetStyleStateMessages,
    })));
  }

  resetStyleStateMessages() {
    this.children.messages.forEach((message) => {
      message.resetStyleState();
    });
  }

  rebuildMessageList(messagesData: Tmessage[] | undefined) {
    if (messagesData) {
      this.children.messages = messagesData.map((item: Tmessage) => (new Message({
        ...item,
        handleReseteStyle: this.resetStyleStateMessages,
      })));
    }
  }

  componentDidUpdate(): boolean {
    return true;
  }

  render() {
    return this.compile(tmpl, {
      ...this.props,
      messages: this.children.messages,
    });
  }
}

export default MessageList;
