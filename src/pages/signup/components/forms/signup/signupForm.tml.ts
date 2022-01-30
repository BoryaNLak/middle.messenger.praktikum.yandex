import { trimTemplate } from '../../../../../utils/HandleTemplate';

let tmpl = `
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
`;
tmpl = trimTemplate(tmpl);
export default tmpl;
