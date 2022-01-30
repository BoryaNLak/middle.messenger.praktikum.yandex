import { v4 as makeUUID } from 'uuid';
import tmpl from './editPasswordForm.tml';
import Block from '../../../../../utils/Block';
import InputProfile from '../../inputProfile/inputProfile';
import Submit from '../../submit/submit';
import FormStore from '../../../../../utils/FormStore';
import FormValidator from '../../../../../utils/FormValidator';
import { inputsDataChangePassword } from '../../../../../utils/constants';

const FORM_NAME = 'editPasswordForm';

const localStore = FormStore.initFormStore(FORM_NAME);

const validation = (values: Record<string, string>): Record<string, string> => {
  const errors: Record<string, string> = {};
  if (values[inputsDataChangePassword[1].name] !== values[inputsDataChangePassword[2].name]) {
    errors[inputsDataChangePassword[1].name] = inputsDataChangePassword[1].error_message;
    errors[inputsDataChangePassword[2].name] = inputsDataChangePassword[2].error_message;
  }
  return errors;
};

type IProps = {
  handleSubmit: (formData: Record<string, string>) => void,
  events?: Record<string, () => void>,
}

class EditPasswordForm extends Block {
  _id: string;

  wrapperStyles: string;

  children: {
    oldPasswordInput: InputProfile,
    newPasswordInput: InputProfile,
    confirmPasswordInput: InputProfile,
    submit: Submit,
  };

  constructor(props: IProps) {
    super('form', props);
    this._id = makeUUID();
    this.wrapperStyles = 'profile__form';
    this.children.oldPasswordInput = new InputProfile({
      ...inputsDataChangePassword[0],
      onInput: (value) => {
        localStore.onInput('oldPassword', value);
      },
    });
    this.children.newPasswordInput = new InputProfile({
      ...inputsDataChangePassword[1],
      onInput: (value) => {
        localStore.onInput('newPassword', value);
      },
    });
    this.children.confirmPasswordInput = new InputProfile({
      ...inputsDataChangePassword[2],
      onInput: (value) => {
        localStore.onInput('confirmPassword', value);
      },
    });
    this.children.submit = new Submit({
      text: 'Сохранить',
      events: {},
    });
    this.setProps({
      events: {
        submit: (evt: Event) => {
          evt.preventDefault();
          const formData = localStore.getData();
          const formChildren = this.children;
          const isFormValid = FormValidator(formChildren, validation(formData));
          if (isFormValid) {
            this.props.handleSubmit(formData);
          }
        },
      },
    });
  }

  componentDidUpdate(): boolean {
    return true;
  }

  render() {
    return this.compile(tmpl, {
      ...this.props,
      oldPasswordInput: this.children.oldPasswordInput,
      newPasswordInput: this.children.newPasswordInput,
      confirmPasswordInput: this.children.confirmPasswordInput,
    });
  }
}

export default EditPasswordForm;
