import { trimTemplate } from '../../utils/HandleTemplate';

let tmpl = `
  {{{ createChatModal }}}
  <div class="chat__column chat__column_thin">
    <div class="chat__block chat__block_type_search">
      <div class="chat__top-pannel">
         {{{ createChatButton }}}
         {{{ profileLink }}}
      </div>
      <div class="chat__search">
        <input id="search" class="chat__search-input" type="text" value="" placeholder="">
        <label class="chat__search-label" for="search"> Поиск</label>
      </div>
    </div>
    <div class="chat__block chat__block_type_contacts">
      {{{ contacts }}}
    </div>
  </div>
  <div class="chat__column chat__column_wide">
      {{{ messages }}}
  </div>
`;
tmpl = trimTemplate(tmpl);
export default tmpl;
