import { v4 as makeUUID } from 'uuid';
import tmpl from './mainForm.tml';
import Block from '../../../../../utils/Block';
import InputProfile from '../../inputProfile';
import Submit from '../../submit/submit';
import Fragment from '../../../../../components/fragment';
import FormStore from '../../../../../utils/FormStore';
import { inputsDataProfile } from '../../../../../utils/constants';

const FORM_NAME = 'profileForm';

const localStore = FormStore.initFormStore(FORM_NAME);

type IProps = {
  events?: Record<string, () => void>,
  handleSubmit: (formData: Record<string, string | FileList>) => void,
  isEditable: boolean,
  userData: {
    first_name: string,
    second_name: string,
    display_name: string,
    login: string,
    email: string,
    phone: string,
  }
}

class MainForm extends Block {
  props: IProps;

  _id: string;

  wrapperStyles: string;

  children: {
    emailInput: InputProfile,
    loginInput: InputProfile,
    firstNameInput: InputProfile,
    secondNameInput: InputProfile,
    nicknameInput: InputProfile,
    phoneInput: InputProfile,
    saveDataButton: Submit,
    submit?: Submit | Fragment,
    fragment: Fragment,
  };

  constructor(props: IProps) {
    super('form', props);
    this._id = makeUUID();
    this.wrapperStyles = 'profile__form';
    this.children.emailInput = new InputProfile({
      ...inputsDataProfile[0],
      value: this.props.userData.email,
      isDisable: !this.props.isEditable,
      onInput: (value) => {
        localStore.onInput('email', value);
      },
    });
    this.children.loginInput = new InputProfile({
      ...inputsDataProfile[1],
      value: this.props.userData.login,
      isDisable: !this.props.isEditable,
      onInput: (value) => {
        localStore.onInput('login', value);
      },
    });
    this.children.firstNameInput = new InputProfile({
      ...inputsDataProfile[2],
      value: this.props.userData.first_name,
      isDisable: !this.props.isEditable,
      onInput: (value) => {
        localStore.onInput('first_name', value);
      },
    });
    this.children.secondNameInput = new InputProfile({
      ...inputsDataProfile[3],
      value: this.props.userData.second_name,
      isDisable: !this.props.isEditable,
      onInput: (value) => {
        localStore.onInput('second_name', value);
      },
    });
    this.children.nicknameInput = new InputProfile({
      ...inputsDataProfile[4],
      value: this.props.userData.display_name,
      isDisable: !this.props.isEditable,
      onInput: (value) => {
        localStore.onInput('display_name', value);
      },
    });
    this.children.phoneInput = new InputProfile({
      ...inputsDataProfile[5],
      value: this.props.userData.phone,
      isDisable: !this.props.isEditable,
      onInput: (value) => {
        localStore.onInput('phone', value);
      },
    });
    this.children.saveDataButton = new Submit({
      text: 'Сохранить',
      events: {},
    });
    this.children.fragment = new Fragment({});
  }

  componentDidUpdate(oldProp: IProps, newProp: IProps): boolean {
    if (oldProp.isEditable !== newProp.isEditable) {
      this.children.emailInput.setProps({ isDisable: !newProp.isEditable });
      this.children.loginInput.setProps({ isDisable: !newProp.isEditable });
      this.children.firstNameInput.setProps({ isDisable: !newProp.isEditable });
      this.children.secondNameInput.setProps({ isDisable: !newProp.isEditable });
      this.children.nicknameInput.setProps({ isDisable: !newProp.isEditable });
      this.children.phoneInput.setProps({ isDisable: !newProp.isEditable });
      if (newProp.isEditable) {
        this.children.submit = this.children.saveDataButton;
        this.setSubmitEvent();
      } else {
        this.children.submit = this.children.fragment;
      }
    }
    return true;
  }

  setSubmitEvent() {
    this.setProps({
      events: {
        submit: (evt: Event) => {
          evt.preventDefault();
          const formData = localStore.getData();
          this.props.handleSubmit(formData);
        },
      },
    });
  }

  render() {
    return this.compile(tmpl, {
      ...this.props,
      loginInput: this.children.loginInput,
      firstNameInput: this.children.firstNameInput,
      secondNameInput: this.children.secondNameInput,
      nicknameInput: this.children.nicknameInput,
      phoneInput: this.children.phoneInput,
      submit: this.children.submit,
    });
  }
}

export default MainForm;
