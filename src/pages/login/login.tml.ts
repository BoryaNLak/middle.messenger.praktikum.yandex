import { trimTemplate } from '../../utils/HandleTemplate';

let tmpl = `
    <h1 class="login__header">Вход</h1>
      {{{ form }}}
    </form>
    <a href="/signup" class="login__link">Нет аккаунта?</a>
`;
tmpl = trimTemplate(tmpl);
export default tmpl;
