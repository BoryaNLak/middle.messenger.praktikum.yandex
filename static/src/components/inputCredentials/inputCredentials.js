import Input from '../input';

export function render({ data, onInput }) {
  const styles = {
    form_group_styles: 'form-group_column',
    label_styles: 'form-group__label_type_credentials',
    input_styles: 'form-group__input_type_credentials',
    error_styles: 'form-group__error_type_credentials',
  };

  const input = Input({ data: { ...data, styles }, onInput });
  return input;
}
