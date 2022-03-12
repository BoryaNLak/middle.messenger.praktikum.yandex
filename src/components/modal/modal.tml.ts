import { trimTemplate } from '../../utils/HandleTemplate';

let tmpl = `
    <div class="modal__window">
      {{#if header }}
        <div class="modal__header">{{{ header }}}</div>
      {{/if}}
      {{#if body }}
        <div class="modal__body">{{{ body }}}</div>
      {{/if}}
      {{#if footer }}
        <div class="modal__footer">{{{ footer }}}</div>
      {{/if}}
    </div>
`;
tmpl = trimTemplate(tmpl);
export default tmpl;
