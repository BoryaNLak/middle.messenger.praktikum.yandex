import { trimTemplate } from '../../../../utils/HandleTemplate';

let tmpl = `
      <fieldset class="chat-name__fieldset">
        {{{ chatNameInput }}}
      </fieldset>
      {{{ submit }}}
`;
tmpl = trimTemplate(tmpl);
export default tmpl;
