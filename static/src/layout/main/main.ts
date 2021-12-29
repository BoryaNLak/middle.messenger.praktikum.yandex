import { v4 as makeUUID } from 'uuid';
import tmpl from './main.tml';
import Block from '../../utils/Block';

import NotFoundPage from '../../pages/error/notFound';
import ServerNotRespondError from '../../pages/error/serverNotRespond';
import Login from '../../pages/login';
import SignupPage from '../../pages/signup';
import Profile from '../../pages/profile';
import Chat from '../../pages/chat';
import { renderDOMElement, compile } from '../../utils/DOMApi';

type IProps = {
  child: HTMLElement,
}

export default class Main extends Block {
  props: { child: HTMLElement };

  constructor(props: IProps) {
    super('main', props);
    this.props = props;
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
