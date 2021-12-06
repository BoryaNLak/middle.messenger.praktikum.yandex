const tmplDropdown = `
  <ul class="dropdown-menu {{ styles }}">
  </ul>
`.trim();

const tmplDropdownItem = `
 <li class="dropdown-menu__item">
   <button type="button" class="dropdown-menu__item-button">
     <img src="{{ icon }}" alt="dropdown_icon" class="dropdown-menu__item-icon" />
     <p class="dropdown-menu__item-text">{{ text }}</p>
   </button>
 </li>
`.trim();

export { tmplDropdown, tmplDropdownItem };