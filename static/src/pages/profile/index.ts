import './profile.css';
import Profile from './profile';
import MainFormRender from './components/forms/mainForm';
import EditPasswordFormRender from './components/forms/editPasswordForm';
import ProfileButton from './components/button/button';

const form = MainFormRender();

const setForm = (formElement) => {
  form.setProps({ form: formElement });
};

const handleChangeProfile = () => {
  console.log('change Data');
};


const handleChangePassword = () => {
  console.log('change Password');
  console.log(changeProfileButton.props);
  changeProfileButton.setProps({ text: 'Updated text on button' });
  console.log(changeProfileButton.props);
};

const profile = new Profile(
  {
    name: 'qwerty',
    buttonText: 'Change name',
    form,
    // changeProfileButton,
    // changePasswordButton,
  },
);
console.log('---------------------------------------------');

function ProfilePage(): Profile {
  return profile;
}
console.log('------',profile._element)

setTimeout(() => {
  profile.setProps({
    name: 'Click me, please',
  });
  console.log(profile._element)
}, 1000);

export default ProfilePage;
