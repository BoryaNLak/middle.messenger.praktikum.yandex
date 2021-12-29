import tmpl from './button.tml';
import Block from '../../../../utils/Block';

type IProps = {
  text: string,
  events: {
    click: () => void,
  }
}

class ProfileButton extends Block {
  props: IProps;

  constructor(props: IProps) {
    super('div', props);
    this.props = props;
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}

export default ProfileButton;
