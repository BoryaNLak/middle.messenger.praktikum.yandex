import { v4 as makeUUID } from 'uuid';
import { tmplDropdown } from './dropdownMenu.tml';
import DropdownItem, { IProps as ItemProps } from './dropDownItem';
import Block from '../../utils/Block';

type IdataItems = Array<ItemProps>;

type Iprops = {
  wrapperStyles?: string,
  dataItems: IdataItems,
}

class DropdownMenu extends Block {
  constructor(props: Iprops) {
    super('ul', props);
    this._id = makeUUID();
    this.wrapperStyles = `dropdown-menu ${props.wrapperStyles}`;
    this.children.dropdownItems = this.renderItems(props.dataItems);
  }

  toggle(): void {
    this.getContent().classList.toggle('dropdown-menu_show');
  }

  renderItems(dataItems: IdataItems): Array<DropdownItem> {
    return dataItems.map((item) => (new DropdownItem({ ...item })));
  }

  componentDidUpdate(): boolean {
    return true;
  }

  render() {
    return this.compile(tmplDropdown, {
      ...this.props,
      dropdownItems: this.children.dropdownItems,
    });
  }
}

export default DropdownMenu;
