import { v4 as makeUUID } from 'uuid';
import tmpl from './editPasswordForm.tml';
import Block from '../../../../../utils/Block';
import InputProfile from '../../inputProfile/inputProfile';

type IProps = {
  oldPassword: InputProfile,
  newPassword: InputProfile,
  confirmPassword: InputProfile,
}

class EditPasswordForm extends Block {
  props: IProps;

  _id: string;

  constructor(props: IProps) {
    super('div', props);
    this.props = props;
    this._id = makeUUID();
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}

export default EditPasswordForm;
