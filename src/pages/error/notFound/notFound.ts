import tmpl from './notFound.tml';
import Block from '../../../utils/Block';
import Window from '../components/window';
import { Link } from '../../../utils/Router';
import { PATHS } from '../../../utils/constants';

class NotFound extends Block {
  children: {
    window: Window,
  };

  constructor() {
    super('div', {});
    this.children.window = new Window({
      number: 404,
      message: 'Не туда попали',
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

export default NotFound;
