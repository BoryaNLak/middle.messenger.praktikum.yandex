import tmpl from './serverNotRespond.tml';
import Block from '../../../utils/Block';
import Window from '../components/window';

type IProps = {
  number: number,
  message: string,
  link: string,
  events?: Record<string, () => void>
}

class ServerNotRespond extends Block {
  props: IProps;

  children: {
    window: Window,
  };

  constructor(props: IProps) {
    super('div', props);
    this.children.window = new Window({
      number: this.props.number,
      message: this.props.message,
      link: this.props.link,
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
