import { v4 as makeUUID } from 'uuid';
import tmpl from './menuMessage.tml';
import Block from '../../../../utils/Block';
import RemoveIcon from '../../../../../static/icons/cross.svg';
import ForwardMesageIcon from '../../../../../static/icons/forward.svg';
import CopyIcon from '../../../../../static/icons/copy.svg';
import EditIcon from '../../../../../static/icons/edit.svg';
import MenuItem from './menuItem';

const menuData = [
  { icon: RemoveIcon, text: 'Удалить' },
  { icon: ForwardMesageIcon, text: 'Переслать' },
  { icon: CopyIcon, text: 'Копировать' },
  { icon: EditIcon, text: 'Изменить' },
];

type IData = {
  handleRemoveMessage: () => void,
  handleForwardMessage: () => void,
  handleCopyMessage: () => void,
  handleEditMessage: () => void,
}

class MenuMessage extends Block {
  props: IData;

  _id: string;

  constructor(props: IData) {
    super('div', props);
    this._id = makeUUID();
    this.wrapperStyles = 'message__menu-container';
    this.children.removeItem = new MenuItem({
      ...menuData[0],
      events: {
        click: this.props.handleRemoveMessage,
      },
    });
    this.children.forwardItem = new MenuItem({
      ...menuData[1],
      events: {
        click: this.props.handleForwardMessage,
      },
    });
    this.children.copyItem = new MenuItem({
      ...menuData[2],
      events: {
        click: this.props.handleCopyMessage,
      },
    });
    this.children.editItem = new MenuItem({
      ...menuData[3],
      events: {
        click: this.props.handleEditMessage,
      },
    });
  }

  toggle() {
    this.toggleStyles('message__menu-container_show');
  }

  show() {
    this.setWrapperStyles('message__menu-container_show');
  }

  hide() {
    this.removeStyles('message__menu-container_show');
  }

  componentDidUpdate(): boolean {
    return true;
  }

  render() {
    return this.compile(tmpl, {
      ...this.props,
      removeItem: this.children.removeItem,
      forwardItem: this.children.forwardItem,
      copyItem: this.children.copyItem,
      editItem: this.children.editItem,
    });
  }
}

export default MenuMessage;
