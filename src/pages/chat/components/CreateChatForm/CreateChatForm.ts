import { v4 as makeUUID } from 'uuid';
import tmpl from './CreateChatForm.tml';
import Block from '../../../../utils/Block';
import FormStore from '../../../../utils/FormStore';
import formValidator from '../../../../utils/FormValidator';
import InputCredentials from '../../../../components/inputCredentials';
import Submit from '../submit';
import { CHAT_NAME_PATTERN } from '../../../../utils/constants';

const FORM_NAME = 'createChatForm';

const localStore = FormStore.initFormStore(FORM_NAME);

type IProps = {
  handleSubmit: (formData: Record<string, string | FileList>) => void,
  events?: Record<string, () => void>,
}

const inputSettings = {
  label: 'Название чата',
  error_message: 'Неверное название',
  name: 'title',
  id: 'chat-title',
  type: 'text',
  required: 'true',
  pattern: CHAT_NAME_PATTERN,
};

class CreateChatForm extends Block {
  props: IProps;

  _id: string;

  wrapperStyles: string;

  children: {
    chatNameInput: InputCredentials,
    submit: Submit,
  };

  constructor(props: IProps) {
    super('form', props);
    this._id = makeUUID();
    this.wrapperStyles = 'create-chat__form';
    this.children.chatNameInput = new InputCredentials({
      ...inputSettings,
      onInput: (value) => {
        localStore.onInput('title', value);
      },
    });

    this.children.submit = new Submit({ text: 'Создать чат' });
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

export default CreateChatForm;
