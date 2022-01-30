import { trimTemplate } from '../../utils/HandleTemplate';

let tmplDropdown = '{{{ dropdownItems }}}';
tmplDropdown = trimTemplate(tmplDropdown);

let tmplDropdownItem = `
  <button type="button" class="dropdown-menu__item-button">
    <img src="{{ icon }}" alt="dropdown_icon" class="dropdown-menu__item-icon" />
    <p class="dropdown-menu__item-text">{{ text }}</p>
  </button>
`;

tmplDropdownItem = trimTemplate(tmplDropdownItem);

export { tmplDropdown, tmplDropdownItem };
