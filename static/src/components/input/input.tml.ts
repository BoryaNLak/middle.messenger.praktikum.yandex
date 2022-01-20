const tmpl = `
    <label class="{{ styles.label_styles }}" for="{{ id }}">{{ label }}</label>
    <input
      id="{{ id }}"
      type="{{ type }}"
      class="{{ styles.input_styles }}"
      value="{{{ value }}}"
      name="{{ name }}"
      placeholder="{{ placeholder }}"
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
      />
    {{#if isValid }}
    {{else }}
      <span class="{{ styles.error_styles }}">{{ error_message }}</span>
    {{/if}}
`.trim();

export default tmpl;
