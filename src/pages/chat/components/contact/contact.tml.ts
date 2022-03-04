import { trimTemplate } from '../../../../utils/HandleTemplate';

let tmpl = `
<img class="contact__photo" alt="contact_photo" src="{{ avatar }}">
<div class="contact__info-container">
  <div class="contact__info">
    <p class="contact__name">{{ title }}</p>
    <p class="contact__last-message">{{ content }}</p>
  </div>
  <div class="contact__message-info">
    <p class="contact__message-date">{{ time }}</p>
    <p class="contact__unread-messages">{{ unread_count }}</p>
  </div>
</div>
`;
tmpl = trimTemplate(tmpl);
export default tmpl;
