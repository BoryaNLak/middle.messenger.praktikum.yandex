import { v4 as makeUUID } from 'uuid';
import { tmplDropdown } from './dropdownMenu.tml';
import DropdownItem, { IProps as ItemProps } from './dropDownItem';
import Block from '../../utils/Block';

// function renderItem({
//   text, icon, onClick, handleClose,
// }) {
//   const item = renderDOMElement(tmplDropdownItem, { text, icon });
//   const handleClick = (evt) => {
//     const { target } = evt;
//     if (!!target && target.closest('.dropdown-menu_show')) {
//       onClick();
//       handleClose();
//     }
//   };
//   item.addEventListener('click', handleClick);
//   return item;
// }

// export function render({ items, styles }) {
//   const dropDownMenu: HTMLElement = renderDOMElement(tmplDropdown, { styles });

//   const removeEvents = () => {
//     document.body.removeEventListener('click', handleCloseDropdownByOverlay);
//   };

//   const hideDropdown = () => {
//     dropDownMenu.classList.remove('dropdown-menu_show');
//     setTimeout(() => {
//       removeEvents();
//     }, 0);
//   };

//   const handleCloseDropdownByOverlay = (evt) => {
//     const { target } = evt;
//     if (!!target && !target.closest('.dropdown-menu')) {
//       hideDropdown();
//     }
//   };

//   const showDropdown = () => {
//     dropDownMenu.classList.add('dropdown-menu_show');
//     setTimeout(() => {
//       setEventListener();
//     }, 0);
//   };

//   const setEventListener = () => {
//     document.body.addEventListener('click', handleCloseDropdownByOverlay);
//   };

//   items.forEach((dataItem) => {
//     const item = renderItem({ ...dataItem, handleClose: hideDropdown });
//     dropDownMenu.appendChild(item);
//   });

//   return { getDOM() { return dropDownMenu; }, show() { showDropdown(); }, hide() { hideDropdown(); } };
// }

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
    const items = dataItems.map((item) => (new DropdownItem({ ...item })));
    return items;
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
