import { v4 as makeUUID } from 'uuid';
import tmpl from './changePhotoForm.tml';
import Block from '../../../../../utils/Block';
import FileInput from '../../fileInput';
import Submit from '../../submit/submit';
import FormStore from '../../../../../utils/FormStore';
import FormValidator from '../../../../../utils/FormValidator';

const FORM_NAME = 'editPhotoForm';

const localStore = FormStore.initFormStore(FORM_NAME);

const validation = (values: Record<string, string | FileList>): Record<string, string> => {
  const errors: Record<string, string> = {};
  if (!values.file) {
    errors.file = 'Добавьте изображение';
  } else if (values.file.length === 0) {
    errors.file = 'Добавьте изображение';
  }
  return errors;
};

type IProps = {
  handleSubmit: (formData: Record<string, string>) => void,
  events?: Record<string, () => void>,
}

class ChangePhotoForm extends Block {
  _id: string;

  wrapperStyles: string;

  children: {
    fileInput: FileInput,
    submit: Submit,
  };

  constructor(props: IProps) {
    super('form', props);
    this._id = makeUUID();
    this.wrapperStyles = 'profile__change-photo-form';
    this.children.fileInput = new FileInput({
      id: 'changeProfilePhoto',
      onInput: (value) => {
        localStore.onInput('file', value);
      },
    });
    this.children.submit = new Submit({
      text: 'Изменить',
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
      fileInput: this.children.fileInput,
    });
  }
}

export default ChangePhotoForm;
