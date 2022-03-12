import { trimTemplate } from '../../../../utils/HandleTemplate';

let tmpl = `
  <div class="message__window">
    <p class="message__text">{{ content }}</p>
    <p class="message__date">  {{ time }}</p>
    {{{ menuMessage }}}
  </div>
`;
tmpl = trimTemplate(tmpl);
export default tmpl;
