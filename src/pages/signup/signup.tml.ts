import { trimTemplate } from '../../utils/HandleTemplate';

let tmpl = `
    <h1 class="signup__header">Регистрация</h1>
      {{{ form }}}
    {{{ loginLink }}}
`;
tmpl = trimTemplate(tmpl);
export default tmpl;
