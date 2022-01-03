const tmpl = `
      <fieldset class="login__fieldset">
        {{{ loginInput }}}
        {{{ passwordInput }}}
      </fieldset>
      {{{ submit }}}
`.trim();

export default tmpl;
