import InputElement from '../../../../components/input';
import { IProps } from '../../../../components/input/input';

const styles = {
  label_styles: 'message-label',
  input_styles: 'message-input',
  error_styles: 'message-error',
};

class MessageInput extends InputElement {
  props: IProps;

  styles: {
    label_styles: string,
    input_styles: string,
    error_styles: string,
  };

  constructor(props: IProps) {
    super(props);
    this.setProps({ styles });
    this.wrapperStyles = 'form-group form-group_row';
  }
}

export default MessageInput;
