import { v4 as makeUUID } from 'uuid';
import tmpl from './message.tml';
import Block from '../../../../utils/Block';
import MenuMessage from '../MenuMessage';
import { Tmessage } from '../../../../controllers';

type TmessageComponent = Tmessage & {
  handleReseteStyle: () => void,
}

class Message extends Block {
  props: TmessageComponent;

  _id: string;

  children: {
    menuMessage: MenuMessage,
  };

  constructor(props: TmessageComponent) {
    super('div', props);
    this._id = makeUUID();
    this.wrapperStyles = 'message';
    this.setWrapperStyles(this.wrapperStyles);
    this._showMenu = this._showMenu.bind(this);
    this._hideMenu = this._hideMenu.bind(this);
    this._handleClickByOverlay = this._handleClickByOverlay.bind(this);
    this.children.menuMessage = new MenuMessage({
      handleRemoveMessage: () => {
        console.log('click by remove message');
      },
      handleEditMessage: () => {
        console.log('click by edit message');
      },
      handleForwardMessage: () => {
        console.log('click by forward message');
      },
      handleCopyMessage: () => {
        console.log('click by copy  message');
      },
    });
    this._setBaseEvents();
  }

  _setBaseEvents() {
    this._setShowEvent();
  }

  _setShowEvent() {
    this.setProps({
      events: {
        click: this._showMenu,
      },
    });
  }

  _showMenu() {
    this.props.handleReseteStyle();
    this.children.menuMessage.show();
    this._activate();
    this.redefineEvent('click', this._hideMenu);
    document.addEventListener('click', this._handleClickByOverlay);
  }

  _hideMenu() {
    this._disactivate();
    this.children.menuMessage.hide();
    this.redefineEvent('click', this._showMenu);
    document.removeEventListener('click', this._handleClickByOverlay);
  }

  _activate() {
    this.setWrapperStyles('message_active');
  }

  _disactivate() {
    this.removeStyles('message_active');
  }

  _handleClickByOverlay(evt: Event) {
    const target = evt.target as Element;
    if (!!target && !target.closest('.message__window')) {
      this._hideMenu();
    }
  }

  componentDidUpdate(): boolean {
    return true;
  }

  resetStyleState() {
    this._disactivate();
    this.children.menuMessage.hide();
    this.redefineEvent('click', this._showMenu);
  }

  render() {
    return this.compile(tmpl, {
      ...this.props,
      menuMessage: this.children.menuMessage,
    });
  }
}

export default Message;
