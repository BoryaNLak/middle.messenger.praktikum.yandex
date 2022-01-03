const tmpl = `
    <fieldset class="profile__fieldset">
      {{{ oldPassword }}}
      {{{ newPassword }}}
      {{{ confirmPassword }}}
    </fieldset>
    {{{ submit }}}
`.trim();

export default tmpl;
