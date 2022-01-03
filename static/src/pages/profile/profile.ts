import { v4 as makeUUID } from 'uuid';
import tmpl from './profile.tml';
import Block from '../../utils/Block';
import mainForm from './components/forms/editPasswordForm/editPasswordForm';
import MainFormRender from './components/forms/mainForm';
import EditPasswordFormRender from './components/forms/editPasswordForm';
import editPasswordForm from './components/forms/mainForm/mainForm';
import ProfileButton from './components/buttons/ProfileButton';
import ProfileNavigationButton from './components/buttons/ProfileNavigationButton';

const LOGIN_PATH = '/login';

function goTo(path:string):void {
  document.location.href = path;
}

type IProps = {
  profileDataButtonText: string,
  passwordButtonText: string,
  exitButtonText: string,
  name: string
}

class Profile extends Block {
  props: IProps;

  _id: string;

  children: {
    changeProfileDataButton: ProfileButton,
    changePasswordButton: ProfileButton,
    form: mainForm | editPasswordForm,
    exitButton: ProfileButton,
    profileNavigationButton: ProfileNavigationButton,
  };

  goToChats: () => void;

  goToProfile: () => void;

  constructor(props: IProps) {
    super('section', props);
    this._id = makeUUID();
    this.wrapperStyles = 'profile';
    this.children.changeProfileDataButton = new ProfileButton({
      events: {
        click: () => { console.log('click by data'); },
      },
      text: this.props.profileDataButtonText,
    });
    this.children.changePasswordButton = new ProfileButton({
      events: {
        click: () => {
          this.setProps({ form: EditPasswordFormRender(true) });
          this.children.changePasswordButton.hideButton();
          this.children.changeProfileDataButton.hideButton();
          this.children.exitButton.hideButton();
          this.children.profileNavigationButton.redefineEvent('click', this.goToProfile);
        },
      },
      text: this.props.passwordButtonText,
    });
    this.children.exitButton = new ProfileButton({
      events: {
        click: () => {
          goTo(LOGIN_PATH);
        },
      },
      text: this.props.exitButtonText,
    });

    this.children.profileNavigationButton = new ProfileNavigationButton({
      events: {
        click: () => {
          this.goToChats();
        },
      },
    });

    this.children.form = MainFormRender();

    this.children.exitButton.setAlertButton();

    this.goToChats = () => {
      goTo('/chats');
    };

    this.goToProfile = () => {
      goTo('/profile');
    };
  }

  componentDidUpdate(oldProps, newProps) {
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
        name: this.props.name,
        form: this.children.form,
      },
    );
  }
}

export default Profile;
