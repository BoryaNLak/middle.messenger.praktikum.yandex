import tmpl from './messageForm.tml';
import Block from '../../../../utils/Block';
import MessageInput from '../messageInput';

const inputData = { type: 'text', placeholder: 'Сообщение', name: 'message' };

type IProps = {
  handleInput: (value:string) => void,
}

class MessageForm extends Block {
  props: IProps;

  children: {
    messageInput: MessageInput,
  };

  constructor(props: IProps) {
    super('form', props);
    this.wrapperStyles = 'messageForm';
    this.children.messageInput = new MessageInput({
      ...inputData,
      onInput: (value: string) => {
        this.props.handleInput(value);
      },
    });
  }

  clear() {
    this.children.messageInput.clear();
  }

  componentDidUpdate(): boolean {
    return true;
  }

  render() {
    return this.compile(tmpl, {
      ...this.props,
      messageInput: this.children.messageInput,
    });
  }
}

export default MessageForm;
