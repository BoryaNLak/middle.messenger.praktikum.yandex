import { v4 as makeUUID } from 'uuid';
import tmpl from './editPasswordForm.tml';
import Block from '../../../../../utils/Block';
import InputProfile from '../../inputProfile/inputProfile';
import Submit from '../../submit/submit';

type IProps = {
  oldPassword: InputProfile,
  newPassword: InputProfile,
  confirmPassword: InputProfile,
  submit: Submit | undefined,
}

class EditPasswordForm extends Block {
  props: IProps;

  _id: string;

  wrapperStyles: string;

  constructor(props: IProps) {
    super('form', props);
    this._id = makeUUID();
    this.wrapperStyles = 'profile__form';
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}

export default EditPasswordForm;
