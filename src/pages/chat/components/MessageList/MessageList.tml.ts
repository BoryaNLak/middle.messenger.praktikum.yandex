import { trimTemplate } from '../../../../utils/HandleTemplate';

let tmpl = `
  {{{ messages }}}
`;
tmpl = trimTemplate(tmpl);
export default tmpl;
