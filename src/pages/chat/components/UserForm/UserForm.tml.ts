import { trimTemplate } from '../../../../utils/HandleTemplate';

let tmpl = `
      <fieldset class="chat-add-user__fieldset">
        {{{ userLoginInput }}}
      </fieldset>
      {{{ submit }}}
`;
tmpl = trimTemplate(tmpl);
export default tmpl;
