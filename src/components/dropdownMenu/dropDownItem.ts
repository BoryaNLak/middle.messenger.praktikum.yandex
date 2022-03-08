import { v4 as makeUUID } from 'uuid';
import { tmplDropdownItem } from './dropdownMenu.tml';
import Block from '../../utils/Block';

export type IProps = {
  icon: string,
  text: string,
  events: {
    click: () => void,
  }
}

class DropdownItem extends Block {
  props: IProps;

  _id: string;

  constructor(props: IProps) {
    super('li', props);
    this._id = makeUUID();
    this.wrapperStyles = 'dropdown-menu__item';
    this.setWrapperStyles(this.wrapperStyles);
  }

  componentDidUpdate(): boolean {
    return true;
  }

  render() {
    return this.compile(tmplDropdownItem, this.props);
  }
}

export default DropdownItem;
