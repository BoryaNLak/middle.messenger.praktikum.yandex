import { trimTemplate } from '../../../../../utils/HandleTemplate';

let tmpl = `
    <fieldset class="profile__fieldset">
      {{{ oldPasswordInput }}}
      {{{ newPasswordInput }}}
      {{{ confirmPasswordInput }}}
    </fieldset>
    {{{ submit }}}
`;
tmpl = trimTemplate(tmpl);
export default tmpl;
