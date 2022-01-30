import InputElement from '../input';
import './inputCredentials.css';
import { IProps } from '../input/input';

const styles = {
  label_styles: 'form-group__label_type_credentials',
  input_styles: 'form-group__input_type_credentials',
  error_styles: 'form-group__error_type_credentials',
};

class InputCredentials extends InputElement {
  props: IProps;

  styles: {
    label_styles: string,
    input_styles: string,
    error_styles: string,
  };

  constructor(props: IProps) {
    super(props);
    this.setProps({ styles });
    this.wrapperStyles = 'form-group form-group_column';
  }
}

export default InputCredentials;
