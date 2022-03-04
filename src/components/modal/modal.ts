import { v4 as makeUUID } from 'uuid';
import tmpl from './modal.tml';
import Block from '../../utils/Block';

type IData = {
  header?: Block,
  body?: Block,
  footer?: Block,
  handle?: (value: unknown) => void
}

class Modal extends Block {
  props: IData;

  _id: string;

  tmpl: string;

  constructor(props: IData) {
    super('div', props);
    this._id = makeUUID();
    this.tmpl = tmpl;
    this.wrapperStyles = 'modal';
    this.hide = this.hide.bind(this);
    this.hideByOverlay = this.hideByOverlay.bind(this);
    this.closeByEsacpe = this.closeByEsacpe.bind(this);
    this._setBaseEvents();
  }

  _setBaseEvents() {
    this.setProps({
      events: {
        click: this.hideByOverlay,
      },
    });
  }

  show() {
    this.setWrapperStyles('modal_show');
    this.setCloseEventListener();
  }

  hide() {
    this.removeStyles('modal_show');
    this.removeCloseEventListener();
  }

  closeByEsacpe(evt: KeyboardEvent) {
    const { code } = evt;
    if (code === 'Escape') {
      this.hide();
    }
  }

  setCloseEventListener() {
    document.addEventListener('keyup', this.closeByEsacpe);
  }

  removeCloseEventListener() {
    document.removeEventListener('keyup', this.closeByEsacpe);
  }

  hideByOverlay(evt: Event) {
    const target = evt.target as Element;
    if (!!target && !target.closest('.modal__window')) {
      this.hide();
    }
  }

  componentDidUpdate(): boolean {
    return true;
  }

  render() {
    return this.compile(tmpl, {
      ...this.props,
      header: this.children.header,
      body: this.children.body,
      footer: this.children.footer,
    });
  }
}

export default Modal;
