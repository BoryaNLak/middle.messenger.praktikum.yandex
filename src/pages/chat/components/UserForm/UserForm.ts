import { v4 as makeUUID } from 'uuid';
import tmpl from './UserForm.tml';
import Block from '../../../../utils/Block';
import FormStore from '../../../../utils/FormStore';
import formValidator from '../../../../utils/FormValidator';
import InputCredentials from '../../../../components/inputCredentials';
import Submit from '../submit';
import { LOGIN_PATTERN } from '../../../../utils/constants';

const FORM_NAME = 'addUserForm';

const localStore = FormStore.initFormStore(FORM_NAME);

type IProps = {
  buttonText: string,
  handleSubmit: (formData: Record<string, string | FileList>) => void,
  events?: Record<string, () => void>,
}

const inputSettings = {
  label: 'Имя пользователя',
  error_message: 'Неверное имя',
  name: 'login',
  id: 'add-user-login',
  type: 'text',
  required: 'true',
  pattern: LOGIN_PATTERN,
};

class UserForm extends Block {
  props: IProps;

  _id: string;

  wrapperStyles: string;

  children: {
    userLoginInput: InputCredentials,
    submit: Submit,
  };

  constructor(props: IProps) {
    super('form', props);
    this._id = makeUUID();
    this.wrapperStyles = 'add-user__form';
    this.children.userLoginInput = new InputCredentials({
      ...inputSettings,
      onInput: (value) => {
        localStore.onInput('login', value);
      },
    });

    this.children.submit = new Submit({ text: this.props.buttonText });
    this.setWrapperAttribute('novalidate', 'true');
    this.setProps({
      events: {
        submit: (evt: Event) => {
          evt.preventDefault();
          const formChildren = this.children;
          const isFormValid = formValidator(formChildren);
          if (isFormValid) {
            const formData = localStore.getData();
            this.props.handleSubmit(formData);
          }
        },
      },
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}

export default UserForm;
