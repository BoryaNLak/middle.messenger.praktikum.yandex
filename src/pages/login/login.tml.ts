import { trimTemplate } from '../../utils/HandleTemplate';

let tmpl = `
    <h1 class="login__header">Вход</h1>
      {{{ form }}}
    </form>
    {{{ signupLink }}}
`;
tmpl = trimTemplate(tmpl);
export default tmpl;
