import { trimTemplate } from '../../../../../utils/HandleTemplate';

let tmpl = `
  <fieldset class="profile__fieldset">
    {{{ emailInput }}}
    {{{ loginInput }}}
    {{{ firstNameInput }}}
    {{{ secondNameInput }}}
    {{{ nicknameInput }}}
    {{{ phoneInput }}}
    {{{ submit }}}
  </fieldset>
`;
tmpl = trimTemplate(tmpl);
export default tmpl;
