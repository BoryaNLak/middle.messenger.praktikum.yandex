const tmpl = `
  <section class="profile">
    <div class="profile__window">
      <div class="profile__photo-part">
        <img class="profile__photo" src="{{ photo }}" alt="profile_photo"/>
      </div>
      <div class="profile__form-part">
        <p class="profile__header">{{ name }}</p>
        <form class="profile__form">
          <fieldset class="profile__fieldset">
          
          </fieldset>
      </form>
      </div>    
      <div class="profile__links">
        <button  class="profile__navigation-buttom profile__navigation-buttom_type_change-data" type="button">Изменить данные</button>
        <button  class="profile__navigation-buttom profile__navigation-buttom_type_change-password" type="button">Изменить пароль</button>
        <a  class="profile__link profile__link_alert" href="/login">Выйти</a>  
      </div> 
      <button class="profile__save-buttom" type="button">Сохранить</button>    
    </div>
     <button class="profile__button-back" type="button"></button>
  </section>
`.trim();

export default tmpl;