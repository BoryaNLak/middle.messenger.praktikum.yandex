import { trimTemplate } from '../../../../../utils/HandleTemplate';

let tmpl = `
      <fieldset class="login__fieldset">
        {{{ loginInput }}}
        {{{ passwordInput }}}
      </fieldset>
      {{{ submit }}}
`;
tmpl = trimTemplate(tmpl);
export default tmpl;
