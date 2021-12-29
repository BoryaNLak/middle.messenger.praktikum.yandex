import tmpl from './notFound.tml';
import Block from '../../../utils/Block';

type IProps = {
  notFoundWindow: HTMLElement,
}

class NotFound extends Block {
  props: IProps;

  constructor(props: IProps) {
    super('div', props);
    this.props = props;
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}

export default NotFound;
