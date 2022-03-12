import { v4 as makeUUID } from 'uuid';
import tmpl from './profile.tml';
import Block from '../../utils/Block';
import MainForm from './components/forms/mainForm';
import EditPasswordForm from './components/forms/editPasswordForm';
import ProfileButton from './components/buttons/ProfileButton';
import ProfileNavigationButton from './components/buttons/ProfileNavigationButton';
import ProfilePhoto from './components/profilePhoto';
import PhotoModal from './components/photoModal';
import Router from '../../utils/Router/Router';
import { PATHS, YANDEX_RESOURCES } from '../../utils/constants';
import { UserController, TStore } from '../../controllers';
import { TchangePassword, TchangeProfile } from '../../utils/Api';
import { connect } from '../../utils/Store';

const PROFILE_DATA_BUTTON_TEXT = 'Изменить данные';
const PROFILE_PASSWORD_BUTTON_TEXT = 'Исменить пароль';
const PROFILE_EXIT_BUTTON_TEXT = 'Выйти';

function mapStateToProps(state: TStore) {
  return {
    userData: {
      first_name: state.user.first_name,
      second_name: state.user.second_name,
      display_name: state.user.display_name,
      login: state.user.login,
      email: state.user.email,
      phone: state.user.phone,
    },
    photo: state.user.avatar,
  };
}

function goTo(path:string):void {
  Router.go(path);
}

type IProps = {
  photo: string | null,
  userData: {
    first_name: string,
    second_name: string,
    display_name: string,
    login: string,
    email: string,
    phone: string,
  }
  events?: Record<string, () => void>,
}

class Profile extends Block {
  props: IProps;

  _id: string;

  children: {
    changeProfileDataButton: ProfileButton,
    changePasswordButton: ProfileButton,
    form: MainForm | EditPasswordForm,
    editForm: EditPasswordForm,
    mainForm: MainForm,
    exitButton: ProfileButton,
    profileNavigationButton: ProfileNavigationButton,
    profilePhoto: ProfilePhoto,
    photoModal: PhotoModal,
  };

  goToChats: () => void;

  goToProfile: () => void;

  constructor(tag: string, props = {}) {
    super('section', props);
    this._id = makeUUID();
    this.wrapperStyles = 'profile';
    this.children.editForm = new EditPasswordForm({
      handleSubmit: (formData) => {
        const data = { oldPassword: formData.oldPassword, newPassword: formData.newPassword } as TchangePassword;
        UserController.changeUserPassword(data);
      },
    });
    this.children.mainForm = new MainForm({
      isEditable: false,
      userData: this.props.userData,
      handleSubmit: (formData) => {
        const data = { ...this.props.userData, ...formData } as TchangeProfile;
        UserController.changeUserProfile(data);
      },
    });
    this.children.form = this.children.mainForm;
    this.children.changeProfileDataButton = new ProfileButton({
      events: {
        click: () => {
          this.setEditMainForm();
          this.hideMenuButtons();
          this.children.profileNavigationButton.redefineEvent('click', this.goToProfile);
        },
      },
      text: PROFILE_DATA_BUTTON_TEXT,
    });
    this.children.changePasswordButton = new ProfileButton({
      events: {
        click: () => {
          this.setProps({ form: this.children.editForm });
          this.hideMenuButtons();
          this.children.profileNavigationButton.redefineEvent('click', this.goToProfile);
        },
      },
      text: PROFILE_PASSWORD_BUTTON_TEXT,
    });
    this.children.exitButton = new ProfileButton({
      events: {
        click: () => {
          UserController.logout()
            .then(() => {
              goTo(PATHS.LOGIN_PATH);
            });
        },
      },
      text: PROFILE_EXIT_BUTTON_TEXT,
    });

    this.children.profileNavigationButton = new ProfileNavigationButton({
      events: {
        click: () => {
          this.goToChats();
        },
      },
    });

    this.children.profilePhoto = new ProfilePhoto({
      photo: this.props.photo ? `${YANDEX_RESOURCES}${this.props.photo}` : '',
      events: {
        click: () => {
          this.children.photoModal.show();
        },
      },
    });

    this.children.photoModal = new PhotoModal({
      handle: (value: {file: FileList}) => {
        const data = new FormData();
        data.append('avatar', value.file[0]);
        UserController.changeAvatar(data);
      },
    });

    this.children.exitButton.setAlertButton();

    this.goToChats = () => {
      goTo(PATHS.MESSENGER_PATH);
    };

    this.goToProfile = () => {
      goTo(PATHS.SETTINGS_PATH);
    };
  }

  setEditMainForm():void {
    this.children.mainForm.setProps({ isEditable: true });
  }

  hideMenuButtons():void {
    this.children.changePasswordButton.hideButton();
    this.children.changeProfileDataButton.hideButton();
    this.children.exitButton.hideButton();
  }

  componentDidUpdate(oldProps:Record<string, MainForm | EditPasswordForm>, newProps:Record<string, MainForm | EditPasswordForm>) {
    if (oldProps.form !== newProps.form) {
      this.children.form = newProps.form;
    }
    return true;
  }

  render() {
    return this.compile(
      tmpl,
      {
        changeProfileDataButton: this.children.changeProfileDataButton,
        changePasswordButton: this.children.changePasswordButton,
        profileNavigationButton: this.children.profileNavigationButton,
        name: this.props.userData.first_name,
        form: this.children.form,
        profilePhoto: this.children.profilePhoto,
        photoModal: this.children.photoModal,
      },
    );
  }
}

export default connect(Profile, mapStateToProps);
