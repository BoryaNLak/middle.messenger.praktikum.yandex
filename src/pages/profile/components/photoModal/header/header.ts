import { v4 as makeUUID } from 'uuid';
import Block from '../../../../../utils/Block';

type IProps = {
  text: string,
}

class Header extends Block {
  props: IProps;

  _id: string;

  constructor(props: IProps) {
    super('p', props);
    this._id = makeUUID();
    this.wrapperStyles = 'photo-modal__header';
  }

  componentDidUpdate() {
    return true;
  }

  render() {
    return `${this.props.text}`;
  }
}

export default Header;
