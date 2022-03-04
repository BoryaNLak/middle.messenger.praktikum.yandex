import { trimTemplate } from '../../../../utils/HandleTemplate';

let tmpl = `
    {{{ addUserModal }}}
    {{{ removeUserModal }}}
    {{{ currentUser }}}
    {{{ messages }}}
    <div class="chat__block chat__block_type_input-message">
      {{{ dropdownFormMenu }}}
      <div class="chat__create-message">
        {{{ attachButton }}}
        {{{ messageForm }}}
        {{{ sendButton }}}
      </div>
    </div>
`;
tmpl = trimTemplate(tmpl);
export default tmpl;
