const tmpl = `
      <fieldset class="login__fieldset">
        {{{ emailInput }}}
        {{{ loginInput }}}
        {{{ firstNameInput }}}
        {{{ secondNameInput }}}
        {{{ phoneInput }}}
        {{{ passwordInput }}}
        {{{ confirmPasswordInput }}}
      </fieldset>
      {{{ submit }}}
`.trim();

export default tmpl;
