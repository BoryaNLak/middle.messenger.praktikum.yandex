import { trimTemplate } from '../../../../utils/HandleTemplate';

let tmpl = `
  <div class="message__window">
    <p class="message__text">{{ text }}</p>
    <p class="message__date">  {{ date }}</p>
    <div class="message__menu-container">
      
    </div>
  </div>
`;
tmpl = trimTemplate(tmpl);
export default tmpl;
