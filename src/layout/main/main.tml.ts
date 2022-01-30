import { trimTemplate } from '../../utils/HandleTemplate';

let tmpl = `
  <main class="page">{{{ child }}}</main>
`;
tmpl = trimTemplate(tmpl);
export default tmpl;
