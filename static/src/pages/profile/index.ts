import './profile.css';
import Profile from './profile';
import MainFormRender from './components/forms/mainForm';
import EditPasswordFormRender from './components/forms/editPasswordForm';
import ProfileButton from './components/button/button';

const form = MainFormRender();

const profile = new Profile(
  {
    name: 'Иванушка',
    profileDataButtonText: 'Изменить данные',
    passwordButtonText: 'Исменить пароль',
  },
);

function ProfilePage(): Profile {
  return profile;
}

setTimeout(() => {
  profile.setProps({
    name: 'Click me, please',
    passwordButtonText: 'New Button Text',
  });
}, 1000);

export default ProfilePage;
