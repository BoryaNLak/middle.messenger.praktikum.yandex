import { trimTemplate } from '../../../../utils/HandleTemplate';

let tmpl = `
  {{{ messageInput }}}
`;
tmpl = trimTemplate(tmpl);
export default tmpl;
