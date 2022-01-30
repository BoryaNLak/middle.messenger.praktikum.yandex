import { trimTemplate } from '../../../utils/HandleTemplate';

let tmpl = `
  <div class="server-not-respod-error-page">{{{ window }}}</div>
`;
tmpl = trimTemplate(tmpl);
export default tmpl;
