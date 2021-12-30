// import Input from '../input';

// export function render({ data, onInput }) {
//   const styles = {
//     form_group_styles: 'form-group_row form-group_type_profile',
//     label_styles: 'form-group__label_type_profile',
//     input_styles: 'form-group__input_type_profile',
//     error_styles: 'form-group__error_type_profile',
//   };

//   const input = Input({ data: { ...data, styles }, onInput });
//   return input;
// }

import { v4 as makeUUID } from 'uuid';
import InputElement from '../../../../components/input';

type IProps = {
  styles: {
    form_group_styles: string,
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

class InputProfile extends InputElement {
  props: IProps;

  _id: string;

  constructor(props: IProps) {
    super(props);
    this.wrapperStyles = 'form-group form-group_row form-group_type_profile';
    this._id = makeUUID();
    this.props = props;
  }
}

export default InputProfile;
