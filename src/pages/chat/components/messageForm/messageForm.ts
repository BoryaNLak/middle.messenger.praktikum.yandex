import tmpl from './messageForm.tml';
import Block from '../../../../utils/Block';
import MessageInput from '../messageInput';

const inputData = { type: 'text', placeholder: 'Сообщение', name: 'message' };

type IProps = {
  handleInput: (value:string) => void,
}

class MessageForm extends Block {
  props: IProps;

  constructor(props: IProps) {
    super('form', props);
    this.wrapperStyles = 'messageForm';
    this.children.messageInput = new MessageInput({
      ...inputData,
      onInput: (value) => {
        this.props.handleInput(value);
      },
    });
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
