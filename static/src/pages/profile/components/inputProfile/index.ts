import './inputProfile.css';
import InputProfile from './inputProfile';

const styles = {
  label_styles: 'form-group__label_type_profile',
  input_styles: 'form-group__input_type_profile',
  error_styles: 'form-group__error_type_profile',
};

function InputProfileRender(props): InputProfile {
  const input = new InputProfile({ ...props, styles });
  return input;
}

export default InputProfileRender;
