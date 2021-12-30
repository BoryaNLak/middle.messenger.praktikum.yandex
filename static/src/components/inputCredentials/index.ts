import './inputCredentials.css';
import InputCredentials from './inputCredentials';

const styles = {
  label_styles: 'form-group__label_type_credentials',
  input_styles: 'form-group__input_type_credentials',
  error_styles: 'form-group__error_type_credentials',
};

function InputCredentialsRender(props): InputCredentials {
  const input = new InputCredentials({ ...props, styles });
  return input;
}

export default InputCredentialsRender;
