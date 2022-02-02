import './profile.css';
import Profile from './profile';

const profile = new Profile(
  {
    name: 'Иванушка',
    profileDataButtonText: 'Изменить данные',
    passwordButtonText: 'Исменить пароль',
    exitButtonText: 'Выйти',
    photo:
    // eslint-disable-next-line max-len
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shrek-forever-after-1587549453.jpg?crop=0.676xw:0.901xh;0.0969xw,0&resize=980:*',
  },
);

function ProfilePage(): Profile {
  return profile;
}

export default ProfilePage;
