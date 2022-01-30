import { v4 as makeUUID } from 'uuid';
import InputElement from '../../../../components/input';
import { IProps } from '../../../../components/input/input';

const styles = {
  label_styles: 'form-group__label_type_profile',
  input_styles: 'form-group__input_type_profile',
  error_styles: 'form-group__error_type_profile',
};

class InputProfile extends InputElement {
  props: IProps;

  _id: string;

  constructor(props: IProps) {
    super(props);
    this.wrapperStyles = 'form-group form-group_row form-group_type_profile';
    this._id = makeUUID();
    this.setProps({ styles });
  }

  componentDidUpdate(): boolean {
    return true;
  }
}

export default InputProfile;
