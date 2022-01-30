import { trimTemplate } from '../../../../utils/HandleTemplate';

let tmpl = `
<img class="contact__photo" alt="contact_photo" src="{{ photo }}">
<div class="contact__info-container">
  <div class="contact__info">
    <p class="contact__name">{{ name }}</p>
    <p class="contact__last-message">{{ last_message }}</p>
  </div>
  <div class="contact__message-info">
    <p class="contact__message-date">{{ date }}</p>
    <p class="contact__unread-messages">{{ unread_messages }}</p>
  </div>
</div>
`;
tmpl = trimTemplate(tmpl);
export default tmpl;
