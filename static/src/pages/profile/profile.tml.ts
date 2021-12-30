const tmpl = `
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
        <a  class="profile__link profile__link_alert" href="/login">Выйти</a>
      </div>
      <button class="profile__save-buttom" type="button">Сохранить</button>
    </div>
     <button class="profile__button-back" type="button"></button>
`.trim();

export default tmpl;
