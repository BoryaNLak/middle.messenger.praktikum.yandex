import { v4 as makeUUID } from 'uuid';
import Block from '../../../../../utils/Block';

type IProps = {
  events: {
    click: () => void,
  }
}

class SendMessageButton extends Block {
  props: IProps;

  _id: string;

  wrapperStyles: string;

  constructor(props: IProps) {
    super('button', props);
    this._id = makeUUID();
    this.wrapperStyles = 'chat__send_message-button';
    this.setWrapperAttribute('type', 'button');
  }

  componentDidUpdate() {
    return true;
  }

  render() {
    return '';
  }
}

export default SendMessageButton;
