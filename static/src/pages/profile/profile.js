import InputProfile from '../../components/inputProfile';
import tmpl from './profile.tml';
import { renderDOMElement } from '../../utils/DOMApi';
import { inputsDataProfile, inputsDataChangePassword, userDataProfile } from '../../utils/constants';

let isDisable = true;

function renderInputs(inputsData, wrap) {
  inputsData.forEach((data) => {
    const input = InputProfile({ data: { ...data, isDisable } });
    wrap.append(input);
  });
}

function dropWrap(wrap) {
  wrap.innerHTML = '';
}

export function render() {
  const page = renderDOMElement(tmpl, userDataProfile);
  const inputWrapper = page.querySelector('.profile__fieldset');
  const menuWrapper = page.querySelector('.profile__links');
  const changeDataButtom = page.querySelector('.profile__navigation-buttom_type_change-data');
  const changePassowrdButtom = page.querySelector('.profile__navigation-buttom_type_change-password');
  const saveShangesButtom = page.querySelector('.profile__save-buttom');
  const backButtom = page.querySelector('.profile__button-back');

  const showSaveButtom = () => {
    saveShangesButtom.classList.add('profile__save-buttom_show');
  };

  const hideSaveButtom = () => {
    saveShangesButtom.classList.remove('profile__save-buttom_show');
  };

  const showMenu = () => {
    menuWrapper.classList.remove('profile__links_hidden');
  };

  const hideMenu = () => {
    menuWrapper.classList.add('profile__links_hidden');
  };

  const initProfile = () => {
    hideSaveButtom();
    dropWrap(inputWrapper);
    showMenu();
    isDisable = true;
    renderInputs(inputsDataProfile, inputWrapper);
  };

  const initChangeData = () => {
    isDisable = false;
    dropWrap(inputWrapper);
    renderInputs(inputsDataProfile, inputWrapper);
    hideMenu();
    showSaveButtom();
    saveShangesButtom.addEventListener('click', handleClickSaveChanges);
  };

  const initChangePassword = () => {
    dropWrap(inputWrapper);
    isDisable = false;
    renderInputs(inputsDataChangePassword, inputWrapper);
    hideMenu();
    showSaveButtom();
    saveShangesButtom.addEventListener('click', handleClickChangePassword);
  };

  const handleClickSaveChanges = () => {
    console.log('Данные изменены');
    saveShangesButtom.removeEventListener('click', handleClickSaveChanges);
    initProfile();
  };

  const handleClickChangePassword = () => {
    console.log('Пароль изменен');
    saveShangesButtom.removeEventListener('click', handleClickChangePassword);
    initProfile();
  };

  const handleChangeData = () => {
    initChangeData();
  };

  const handleChangePassword = () => {
    initChangePassword();
  };

  changeDataButtom.addEventListener('click', handleChangeData);
  changePassowrdButtom.addEventListener('click', handleChangePassword);
  backButtom.addEventListener('click', initProfile);

  initProfile();

  return page;
}
