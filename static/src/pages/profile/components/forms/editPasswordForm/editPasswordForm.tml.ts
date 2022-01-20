const tmpl = `
    <fieldset class="profile__fieldset">
      {{{ oldPasswordInput }}}
      {{{ newPasswordInput }}}
      {{{ confirmPasswordInput }}}
    </fieldset>
    {{{ submit }}}
`.trim();

export default tmpl;
