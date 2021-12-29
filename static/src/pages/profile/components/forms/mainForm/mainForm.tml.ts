const tmpl = `
  <form class="profile__form">
    <fieldset class="profile__fieldset">
      {{{ email }}}
      {{{ login }}}
      {{{ first_name }}}
      {{{ second_name }}}
      {{{ nickname }}}
      {{{ phone }}}
    </fieldset>
  </form>
`.trim();

export default tmpl;
