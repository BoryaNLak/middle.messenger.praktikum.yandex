import { trimTemplate } from '../../utils/HandleTemplate';

let tmpl = `
    <h1 class="signup__header">Регистрация</h1>
      {{{ form }}}
    <a href="/login" class="signup__link">Войти</a>
`;
tmpl = trimTemplate(tmpl);
export default tmpl;
