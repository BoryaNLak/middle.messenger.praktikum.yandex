import { tmplDropdown, tmplDropdownItem } from './dropdownMenu.tml';
import { renderDOMElement } from '../../utils/DOMApi';

function renderItem({
  text, icon, onClick, handleClose,
}) {
  const item = renderDOMElement(tmplDropdownItem, { text, icon });
  const handleClick = (evt) => {
    const { target } = evt;
    if (!!target && target.closest('.dropdown-menu_show')) {
      onClick();
      handleClose();
    }
  };
  item.addEventListener('click', handleClick);
  return item;
}

export function render({ items, styles }) {
  const dropDownMenu: HTMLElement = renderDOMElement(tmplDropdown, { styles });

  const removeEvents = () => {
    document.body.removeEventListener('click', handleCloseDropdownByOverlay);
  };

  const hideDropdown = () => {
    dropDownMenu.classList.remove('dropdown-menu_show');
    setTimeout(() => {
      removeEvents();
    }, 0);
  };

  const handleCloseDropdownByOverlay = (evt) => {
    const { target } = evt;
    if (!!target && !target.closest('.dropdown-menu')) {
      hideDropdown();
    }
  };

  const showDropdown = () => {
    dropDownMenu.classList.add('dropdown-menu_show');
    setTimeout(() => {
      setEventListener();
    }, 0);
  };

  const setEventListener = () => {
    document.body.addEventListener('click', handleCloseDropdownByOverlay);
  };

  items.forEach((dataItem) => {
    const item = renderItem({ ...dataItem, handleClose: hideDropdown });
    dropDownMenu.appendChild(item);
  });

  return { getDOM() { return dropDownMenu; }, show() { showDropdown(); }, hide() { hideDropdown(); } };
}
