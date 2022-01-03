import './profile.css';
import Profile from './profile';

const profile = new Profile(
  {
    name: 'Иванушка',
    profileDataButtonText: 'Изменить данные',
    passwordButtonText: 'Исменить пароль',
    exitButtonText: 'Выйти',
  },
);

function ProfilePage(): Profile {
  return profile;
}

export default ProfilePage;
