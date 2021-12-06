import Input from "../input";

export function render({ data, onInput }){

  const styles = {
    form_group_styles: 'form-group_row form-group_type_profile',
    label_styles: 'form-group__label_type_profile',
    input_styles: 'form-group__input_type_profile',
    error_styles: 'form-group__error_type_profile'
  }


  const input = Input({data: {...data, styles }, onInput })
  return input
}