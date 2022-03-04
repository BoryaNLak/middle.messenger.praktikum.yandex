/* eslint-disable no-useless-escape */

export const LOGIN_PATTERN = '(?=^.{3,20}$)(?=.*[0-9]{0,})(?=.*[a-zA-Z_-]).*$';
const EMAIL_PATTERN = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
const PASSWORD_PATTERN = '(?=^.{8,40}$)(?=.*[0-9]{1,})(?=.*[A-Z]{1,})(?=.*).*$';
const NAME_PATTERN = '(^[A-ZА-ЯЁ]{1})([a-zа-яё-]{1,})$';
const PHONE_PATTERN = '(?=^.{10,15}$)(?=^.[+]{0,1}).*$';
export const CHAT_NAME_PATTERN = '^[А-яЁёA-z_ ]{3,30}$';

export const PATHS = {
  LOGIN_PATH: '/',
  SIGNUP_PATH: '/sign-up',
  MESSENGER_PATH: '/messenger',
  SETTINGS_PATH: '/settings',
  OTHER_PATH: '/*',
};

export const YANDEX_API_URL = 'https://ya-praktikum.tech/api/v2';
export const YANDEX_RESOURCES = 'https://ya-praktikum.tech/api/v2/resources';
export const YANDEX_SOCKET = 'wss://ya-praktikum.tech/ws';

export const inputsDataProfile = [
  {
    label: 'Почта',
    error_message: 'Неверная почта',
    name: 'email',
    id: 'profile_email',
    type: 'text',
    pattern: EMAIL_PATTERN,
  },
  {
    label: 'Логин',
    error_message: 'Неверный логин',
    name: 'login',
    id: 'profile_login',
    type: 'text',
    pattern: LOGIN_PATTERN,
  },
  {
    label: 'Фамилия',
    error_message: 'Неверная фамилия',
    name: 'first_name',
    id: 'profile_first_name',
    type: 'text',
    pattern: NAME_PATTERN,
  },
  {
    label: 'Имя',
    error_message: 'Неверное имя',
    name: 'second_name',
    id: 'profile_second_name',
    type: 'text',
    pattern: NAME_PATTERN,
  },
  {
    label: 'Имя в чате',
    error_message: 'Неверное имя',
    name: 'display_name',
    id: 'profile_display_name',
    type: 'text',
  },
  {
    label: 'Номер телефона',
    error_message: 'Неверный номер',
    name: 'phone',
    id: 'profile_phone',
    type: 'tel',
    pattern: PHONE_PATTERN,
  },
];

export const inputsDataChangePassword = [
  {
    label: 'Старый пароль',
    error_message: 'Неверный пароль',
    name: 'password_old',
    id: 'profile_old_password',
    type: 'password',
    isDisable: false,
    required: 'true',
    pattern: PASSWORD_PATTERN,
  },
  {
    label: 'Новый пароль',
    error_message: 'Неверный пароль',
    name: 'password_new',
    id: 'profile_password_new',
    type: 'password',
    isDisable: false,
    required: 'true',
    pattern: PASSWORD_PATTERN,
  },
  {
    label: 'Повтори пароль',
    error_message: 'Пароли не совпадают',
    name: 'password_confirm',
    id: 'profile_password_confirm',
    type: 'password',
    isDisable: false,
    required: 'true',
    pattern: PASSWORD_PATTERN,
  },
];

export const userDataProfile = {
  photo: `https://hips.hearstapps.com/
          hmg-prod.s3.amazonaws.com/images/shrek-forever-after-1587549453.jpg?crop=0.676xw:0.901xh;0.0969xw,0&resize=980:*`,
  name: 'Иванушка',
};

export const inputsDataLogin = [
  {
    label: 'Логин',
    error_message: 'Неверный логин',
    name: 'login',
    id: 'login_input',
    type: 'text',
    required: 'true',
    pattern: LOGIN_PATTERN,
  },
  {
    label: 'Пароль',
    error_message: 'Неверный пароль',
    name: 'password',
    id: 'password_input',
    type: 'password',
    required: 'true',
    pattern: PASSWORD_PATTERN,
  },
];

export const inputsDataSignup = [
  {
    label: 'Почта',
    error_message: 'Неверная почта',
    name: 'email',
    id: 'signup_email',
    type: 'text',
    isDisable: false,
    required: 'true',
    pattern: EMAIL_PATTERN,
  },
  {
    label: 'Логин',
    error_message: 'Неверный логин',
    name: 'login',
    id: 'signup_login',
    type: 'text',
    isDisable: false,
    required: 'true',
    pattern: LOGIN_PATTERN,
  },
  {
    label: 'Фамилия',
    error_message: 'Неверная фамилия',
    name: 'first_name',
    id: 'signup_first_name',
    type: 'text',
    isDisable: false,
    required: 'true',
    pattern: NAME_PATTERN,
  },
  {
    label: 'Имя',
    error_message: 'Неверное имя',
    name: 'second_name',
    id: 'signup_second_name',
    type: 'text',
    isDisable: false,
    required: 'true',
    pattern: NAME_PATTERN,
  },
  {
    label: 'Номер телефона',
    error_message: 'Неверный номер',
    name: 'phone',
    id: 'signup_phone',
    type: 'tel',
    isDisable: false,
    required: 'true',
    pattern: PHONE_PATTERN,
  },
  {
    label: 'Пароль',
    error_message: 'Неверный пароль',
    name: 'password',
    id: 'signup_password',
    type: 'password',
    isDisable: false,
    required: 'true',
    pattern: PASSWORD_PATTERN,
  },
  {
    label: 'Пароль (еще раз)',
    error_message: 'Пароли не совпадают',
    name: 'confirm_password',
    id: 'signup_confirm_password',
    type: 'password',
    isDisable: false,
    required: 'true',
    pattern: PASSWORD_PATTERN,
  },
];

export const contactsData = [
  {
    photo: `https://hips.hearstapps.com/hmg-prod.s3.
            amazonaws.com/images/shrek-forever-after-1587549453.jpg?crop=0.676xw:0.901xh;0.0969xw,0&resize=980:*`,
    name: 'Иван',
    last_message: 'Последнее сообщение',
    date: '12.05.2020',
    unread_messages: '999',
  },
  {
    photo: `https://hips.hearstapps.com/hmg-prod.s3.
            amazonaws.com/images/shrek-forever-after-1587549453.jpg?crop=0.676xw:0.901xh;0.0969xw,0&resize=980:*`,
    name: 'Кирилл',
    last_message: 'Последнее сообщение',
    date: '13.07.2020',
    unread_messages: '2',
  },
];

export const messagesData = [
  { text: 'Текстовый текст сообщения', date: '12.12.2020' },
  {
    text: `В связи с этим я решил опробовать себя в роли рассказчика и затронуть техническую сторону Bitbucket.
     Прошу не рассматривать моё намерение как попытку рекламы, ибо я совершенно не преследую эту цель. Если эта статья обнаружит
     интерес со стороны читателей, я буду рад развивать тему и постараюсь ответить на возникающие вопросы.`,
    date: '13.12.2020',
  },
];

export const dataServerError = { number: 500, message: 'Мы уже фиксим', link: '/chat' };

export const dataNotFoundError = { number: 404, message: 'Не туда попали', link: '/chat' };
