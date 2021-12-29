import tmpl from './serverNotRespond.tml';
import Block from '../../../utils/Block';

type IProps = {
  serverNotRespondWindow: HTMLElement,
}

class ServerNotRespond extends Block {
  props: IProps;

  constructor(props: IProps) {
    super('div', props);
    this.props = props;
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}

export default ServerNotRespond;
