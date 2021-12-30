import InputElement from '../input';

type IProps = {
  styles: {
    label_styles: string,
    input_styles: string,
    error_styles: string
  },
  value?: string,
  id?: string,
  label?: string,
  error_message?: string,
  name?: string,
  type?: string,
}

class InputCredentials extends InputElement {
  props: IProps;

  constructor(props: IProps) {
    super(props);
    this.wrapperStyles = 'form-group form-group_column';
    this.props = props;
  }
}

export default InputCredentials;
