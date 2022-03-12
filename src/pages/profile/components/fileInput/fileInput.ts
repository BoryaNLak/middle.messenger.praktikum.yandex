import { v4 as makeUUID } from 'uuid';
import InputElement from '../../../../components/input';
import { IProps } from '../../../../components/input/input';

const styles = {
  label_styles: 'label_type_file',
  input_styles: 'input_type_file',
  error_styles: 'error_type_file',
};

class FileInput extends InputElement {
  props: IProps;

  _id: string;

  constructor(props: IProps) {
    super(props);
    this.wrapperStyles = 'form-group form-group_column';
    this._id = makeUUID();
    this.setProps({
      styles,
      type: 'file',
      label: 'Выбрать файл на компьютере',
      name: 'avatar',
      accept: 'image/*',
    });
  }

  componentDidUpdate(): boolean {
    return true;
  }
}

export default FileInput;
