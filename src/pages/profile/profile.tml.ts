import { trimTemplate } from '../../utils/HandleTemplate';

let tmpl = `
    <div class="profile__window">
      <div class="profile__photo-part">
        <img class="profile__photo" src="{{ photo }}" alt="profile_photo"/>
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
