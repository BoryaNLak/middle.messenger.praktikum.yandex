const tmpl = `
  <div class="{{ styles.form_group_styles }} form-group">
    <label class="{{ styles.label_styles }}" for="{{ id }}">{{ label }}</label>
    <input 
      id="{{ id }}" 
      type="{{ type }}" 
      class="{{ styles.input_styles }}" 
      value="{{ value }}" name="{{ name }}" 
      placeholder="{{ placeholder }}" 
      {{#if isDisable}}
        disabled='true'
      {{else }}
      {{/if}}
      />
    <span class="{{ styles.error_styles }}">{{ error_message }}</span>
  </div>
`.trim();

export default tmpl;