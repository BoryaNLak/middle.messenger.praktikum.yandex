const tmpl = `
  <form class="profile__form">
    <fieldset class="profile__fieldset">
      {{{ oldPassword }}}
      {{{ newPassword }}}
      {{{ confirmPassword }}}
    </fieldset>
  </form>
`.trim();

export default tmpl;
