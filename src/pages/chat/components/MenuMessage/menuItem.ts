import { v4 as makeUUID } from 'uuid';
import { itemTempl } from './menuMessage.tml';
import Block from '../../../../utils/Block';

type IData = {
  events: {
    click: () => void,
  },
  text: string,
  icon: string,
}

class MenuItem extends Block {
  props: IData;

  _id: string;

  constructor(props: IData) {
    super('li', props);
    this._id = makeUUID();
    this.wrapperStyles = 'message__menu-item';
  }

  componentDidUpdate(): boolean {
    return true;
  }

  render() {
    return this.compile(itemTempl, {
      ...this.props,
    });
  }
}

export default MenuItem;
