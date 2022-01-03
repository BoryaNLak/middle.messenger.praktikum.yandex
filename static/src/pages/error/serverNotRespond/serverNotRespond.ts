import tmpl from './serverNotRespond.tml';
import Block from '../../../utils/Block';
import Window from '../components/window';

type IProps = {
  number: number,
  message: string,
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
    });
  }

  componentDidUpdate(oldProps, newProps) {
    return true;
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}

export default ServerNotRespond;
