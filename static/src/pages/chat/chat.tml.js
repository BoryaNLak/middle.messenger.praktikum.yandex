const tmpl = `
  <section class="chats">
    <div class="chat__column chat__column_thin">
      <div class="chat__block chat__block_type_search">
        <a class="chat__link chat__link_type_profile" href="/profile">Профиль </a>
        <input class="chat__input chat__input_type_search" type="text" value="" placeholder="&#xF002; Поиск">
      </div>      
      <div class="chat__block chat__block_type_contacts">
     
      </div>
    </div>
    <div class="chat__column chat__column_wide">
      <div class="chat__block chat__block_type_current-user">
        <div class="chat__current-user">
          <div class="chat__current-user-info">
            <img src="" class="chat__current-user-image" alt="current_user"/>
            <p class="chat__current-user-name">Иван</p>
          </div>          
          <button type="button" class="chat__current-user-menu"></button>
        </div>
      </div>
      <div class="chat__block chat__block_type_messages">
   
      </div>
      <div class="chat__block chat__block_type_input-message">
        <div class="chat__create-message">
          <button type="button" class="chat__attach-buttom"></button>
          <input type="text" class="chat__input-message" placeholder="Сообщение">
          <button type="button" class="chat__send_message-buttom"></button>
        </div>
      </div>
    </div>
  </section>
`.trim();

export default tmpl;