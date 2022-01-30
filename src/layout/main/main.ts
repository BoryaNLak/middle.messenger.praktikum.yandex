import tmpl from './main.tml';
import Block from '../../utils/Block';

type IProps = {
  child: Block,
}

export default class Main extends Block {
  constructor(props: IProps) {
    super('div', props);
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
