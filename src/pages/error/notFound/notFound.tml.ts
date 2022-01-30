import { trimTemplate } from '../../../utils/HandleTemplate';

let tmpl = `
  <div class="not-found-error-page">{{{ window }}}</div>
`;
tmpl = trimTemplate(tmpl);
export default tmpl;
