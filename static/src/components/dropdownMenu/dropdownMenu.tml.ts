const tmplDropdown = `
    {{{ dropdownItems }}}
`.trim();

const tmplDropdownItem = `
  <button type="button" class="dropdown-menu__item-button">
    <img src="{{ icon }}" alt="dropdown_icon" class="dropdown-menu__item-icon" />
    <p class="dropdown-menu__item-text">{{ text }}</p>
  </button>
`.trim();

export { tmplDropdown, tmplDropdownItem };
