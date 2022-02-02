import { trimTemplate } from '../../utils/HandleTemplate';

let tmpl = `
  {{{ photoModal }}}
  <div class="profile__window">
    <div class="profile__photo-part">
      {{{ profilePhoto }}}
    </div>
    <div class="profile__form-part">
      <p class="profile__header">{{ name }}</p>
      {{{ form }}}
    </div>
    <div class="profile__links">
      {{{ changeProfileDataButton }}}
      {{{ changePasswordButton }}}
      {{{ exitButton }}}
    </div>
  </div>
  {{{ profileNavigationButton }}}
`;
tmpl = trimTemplate(tmpl);
export default tmpl;
