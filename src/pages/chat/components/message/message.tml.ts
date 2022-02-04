import { trimTemplate } from '../../../../utils/HandleTemplate';

let tmpl = `
  <div class="message__window">
    <p class="message__text">{{ text }}</p>
    <p class="message__date">  {{ date }}</p>
    {{{ menuMessage }}}
  </div>
`;
tmpl = trimTemplate(tmpl);
export default tmpl;
