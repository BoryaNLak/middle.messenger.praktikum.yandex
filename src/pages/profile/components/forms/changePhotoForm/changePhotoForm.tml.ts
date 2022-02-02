import { trimTemplate } from '../../../../../utils/HandleTemplate';

let tmpl = `
    {{{ fileInput }}}
    {{{ submit }}}
`;
tmpl = trimTemplate(tmpl);
export default tmpl;
