import tmpl from './serverNotRespond.tml';
import Block from '../../../utils/Block';
import Window from '../components/window';
import { Link } from '../../../utils/Router';
import { PATHS } from '../../../utils/constants';

class ServerNotRespond extends Block {
  children: {
    window: Window,
  };

  constructor() {
    super('div', {});
    this.children.window = new Window({
      number: 500,
      message: 'Мы уже фиксим',
      link: new Link({
        text: 'Назад к чатам',
        to: PATHS.MESSENGER_PATH,
        cssClass: 'error-window__link',
      }),
    });
  }

  componentDidUpdate() {
    return true;
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}

export default ServerNotRespond;
