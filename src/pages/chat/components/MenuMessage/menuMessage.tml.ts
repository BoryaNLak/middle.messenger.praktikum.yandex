import { trimTemplate } from '../../../../utils/HandleTemplate';

let tmpl = `
  <ul class='message__menu'>
    {{{ removeItem }}}
    {{{ forwardItem }}}
    {{{ copyItem }}}
    {{{ editItem }}}
  </ul>
`;
tmpl = trimTemplate(tmpl);
export default tmpl;

export let itemTempl = `
  <img class='message__menu-icon' src='{{icon}}' alt='icon_message_menu'/>
  <p class='message__menu-text'>{{text}}</p>
`;

itemTempl = trimTemplate(itemTempl);
