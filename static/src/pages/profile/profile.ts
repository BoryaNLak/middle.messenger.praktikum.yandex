// import InputProfile from '../../components/inputProfile';

// import { renderDOMElement } from '../../utils/DOMApi';
// import { inputsDataProfile, inputsDataChangePassword, userDataProfile } from '../../utils/constants';

// let isDisable = true;

// function renderInputs(inputsData, wrap) {
//   inputsData.forEach((data) => {
//     const input = InputProfile({ data: { ...data, isDisable } });
//     wrap.append(input);
//   });
// }

// function dropWrap(wrap) {
//   wrap.innerHTML = '';
// }

// export function render() {
//   const page = renderDOMElement(tmpl, userDataProfile);
//   const inputWrapper = page.querySelector('.profile__fieldset');
//   const menuWrapper = page.querySelector('.profile__links');
//   const changeDataButtom = page.querySelector('.profile__navigation-buttom_type_change-data');
//   const changePassowrdButtom = page.querySelector('.profile__navigation-buttom_type_change-password');
//   const saveShangesButtom = page.querySelector('.profile__save-buttom');
//   const backButtom = page.querySelector('.profile__button-back');

//   const showSaveButtom = () => {
//     saveShangesButtom.classList.add('profile__save-buttom_show');
//   };

//   const hideSaveButtom = () => {
//     saveShangesButtom.classList.remove('profile__save-buttom_show');
//   };

//   const showMenu = () => {
//     menuWrapper.classList.remove('profile__links_hidden');
//   };

//   const hideMenu = () => {
//     menuWrapper.classList.add('profile__links_hidden');
//   };

//   const initProfile = () => {
//     hideSaveButtom();
//     dropWrap(inputWrapper);
//     showMenu();
//     isDisable = true;
//     renderInputs(inputsDataProfile, inputWrapper);
//   };

//   const initChangeData = () => {
//     isDisable = false;
//     dropWrap(inputWrapper);
//     renderInputs(inputsDataProfile, inputWrapper);
//     hideMenu();
//     showSaveButtom();
//     saveShangesButtom.addEventListener('click', handleClickSaveChanges);
//   };

//   const initChangePassword = () => {
//     dropWrap(inputWrapper);
//     isDisable = false;
//     renderInputs(inputsDataChangePassword, inputWrapper);
//     hideMenu();
//     showSaveButtom();
//     saveShangesButtom.addEventListener('click', handleClickChangePassword);
//   };

//   const handleClickSaveChanges = () => {
//     console.log('Данные изменены');
//     saveShangesButtom.removeEventListener('click', handleClickSaveChanges);
//     initProfile();
//   };

//   const handleClickChangePassword = () => {
//     console.log('Пароль изменен');
//     saveShangesButtom.removeEventListener('click', handleClickChangePassword);
//     initProfile();
//   };

//   const handleChangeProfile = () => {
//     initChangeData();
//   };

//   const handleChangePassword = () => {
//     initChangePassword();
//   };

//   changeDataButtom.addEventListener('click', handleChangeProfile);
//   changePassowrdButtom.addEventListener('click', handleChangePassword);
//   backButtom.addEventListener('click', initProfile);

//   initProfile();

//   return page;
// }

import tmpl from './profile.tml';
import Block from '../../utils/Block';
import mainForm from './components/forms/editPasswordForm/editPasswordForm';
import editPasswordForm from './components/forms/mainForm/mainForm';
import ProfileButton from './components/button/button';

type IProps = {
  form: mainForm | editPasswordForm,
  changeProfileButton: ProfileButton,
  changePasswordButton: ProfileButton,
}

const changePasswordButton = new ProfileButton({
  events: {
    click: () => {console.log(123)},
  },
  text: 'Изменить пароль',
});

const changeProfileButton = new ProfileButton({
  events: {
    click: () => {console.log(123)},
  },
  text: 'Изменить данные',
});

class Profile extends Block {
  props: IProps;

  constructor(props: IProps) {
    super('div', props);
    this.children.changeProfileDataButton = new ProfileButton({
      events: {
        click: () => { console.log(123) },
      },
      text: this.props.buttonText,
    });
  }

  componentDidUpdate(oldProps, newProps) {
    console.log('******', {...this.props})
    console.log('Вызов функции обновления')
    console.log(this.props)
    return true;
  }

  render() {
    return this.compile(tmpl, { changeProfileDataButton: this.children.changeProfileDataButton, name: this.props.name } );
  }
}

export default Profile;
