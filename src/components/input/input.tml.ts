import { trimTemplate } from '../../utils/HandleTemplate';

let tmpl = `
    <label class="{{ styles.label_styles }}" for="{{ id }}">{{ label }}</label>
    <input
      id="{{ id }}"
      type="{{ type }}"
      class="{{ styles.input_styles }}"
      value="{{{ value }}}"
      name="{{ name }}"
      {{#if placeholder }}
        placeholder="{{ placeholder }}"
      {{/if}}
      {{#if isDisable }}
        disabled='true'
      {{/if}}
      {{#if required }}
        required
      {{/if}}
      {{#if minLen }}
        minlength="{{ minLen }}"
      {{/if}}
      {{#if maxLen }}
        maxlength="{{ maxLen }}"
      {{/if}}
      {{#if minVal }}
        min="{{ minVal }}"
      {{/if}}
      {{#if maxVal }}
        max="{{ maxVal }}"
      {{/if}}
      {{#if pattern }}
        pattern="{{ pattern }}"
      {{/if}}
      {{#if accept }}
        accept="{{ accept }}"
      {{/if}}
      />
`;

tmpl = trimTemplate(tmpl);

export default tmpl;
