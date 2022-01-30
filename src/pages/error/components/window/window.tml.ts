import { trimTemplate } from '../../../../utils/HandleTemplate';

let tmpl = `
    <h1 class="error-window__header">{{ number }}</h1>
    <p class="error-window__message">{{ message }}</p>
    <a href="{{ link }}" class="error-window__link">Назад к чатам</a>
`;
tmpl = trimTemplate(tmpl);
export default tmpl;
