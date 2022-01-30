import { v4 as makeUUID } from 'uuid';
import tmpl from './profile.tml';
import Block from '../../utils/Block';
import MainForm from './components/forms/mainForm';
import EditPasswordForm from './components/forms/editPasswordForm';
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
  name: string,
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
  };

  goToChats: () => void;

  goToProfile: () => void;

  constructor(props: IProps) {
    super('section', props);
    this._id = makeUUID();
    this.wrapperStyles = 'profile';
    this.children.editForm = new EditPasswordForm({
      handleSubmit: (formData) => {
        console.log(formData);
      },
    });
    this.children.mainForm = new MainForm({
      isEditable: false,
      handleSubmit: (formData) => {
        console.log(formData);
      },
    });
    this.children.form = this.children.mainForm;
    this.children.changeProfileDataButton = new ProfileButton({
      events: {
        click: () => {
          console.log('click by change data');
          this.setEditMainForm();
          this.hideMenuButtons();
          this.children.profileNavigationButton.redefineEvent('click', this.goToProfile);
        },
      },
      text: this.props.profileDataButtonText,
    });
    this.children.changePasswordButton = new ProfileButton({
      events: {
        click: () => {
          this.setProps({ form: this.children.editForm });
          this.hideMenuButtons();
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

    this.children.exitButton.setAlertButton();

    this.goToChats = () => {
      goTo('/chat');
    };

    this.goToProfile = () => {
      goTo('/profile');
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
        name: this.props.name,
        form: this.children.form,
      },
    );
  }
}

export default Profile;
