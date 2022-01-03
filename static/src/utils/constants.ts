export const inputsDataProfile = [
  {
    label: 'Почта', error_message: 'Неверная почта', name: 'email', id: 'profile_email', type: 'email', value: 'pochta@yandex.ru',
  },
  {
    label: 'Логин', error_message: 'Неверный логин', name: 'login', id: 'profile_login', type: 'text', value: 'ivanivanov',
  },
  {
    label: 'Фамилия', error_message: 'Неверная фамилия', name: 'first_name', id: 'profile_first_name', type: 'text', value: 'Иван',
  },
  {
    label: 'Имя', error_message: 'Неверное имя', name: 'second_name', id: 'profile_second_name', type: 'text', value: 'Иванов',
  },
  {
    label: 'Имя в чате', error_message: 'Неверное имя', name: 'chat_name', id: 'profile_chat_name', type: 'text', value: 'Иван',
  },
  {
    label: 'Номер телефона', error_message: 'Неверный номер', name: 'phone', id: 'profile_phone', type: 'tel', value: '+7 (909) 967 30 30',
  },
];

export const inputsDataChangePassword = [
  {
    label: 'Старый пароль',
    error_message: 'Неверный пароль',
    name: 'password_old',
    id: 'profile_old_password',
    type: 'password',
    value: '12345678',
  },
  {
    label: 'Новый пароль',
    error_message: 'Неверный пароль',
    name: 'password_new',
    id: 'profile_password_new',
    type: 'password',
    value: '',
  },
  {
    label: 'Повтори пароль',
    error_message: 'Неверный пароль',
    name: 'password_confirm',
    id: 'profile_password_confirm',
    type: 'password',
    value: '',
  },
];

export const userDataProfile = {
  photo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shrek-forever-after-1587549453.jpg?crop=0.676xw:0.901xh;0.0969xw,0&resize=980:*',
  name: 'Иванушка',
};

export const inputsDataLogin = [
  {
    label: 'Логин', error_message: 'Неверный логин', name: 'login', id: '', type: '',
  },
  {
    label: 'Пароль', error_message: 'Неверный пароль', name: 'password', id: '', type: '',
  },
];

export const inputsDataSignup = [
  {
    label: 'Почта', error_message: 'Неверная почта', name: 'email', id: 'signup_email', type: 'email', isDisable: false,
  },
  {
    label: 'Логин', error_message: 'Неверный логин', name: 'login', id: 'signup_login', type: 'text', isDisable: false,
  },
  {
    label: 'Фамилия', error_message: 'Неверная фамилия', name: 'first_name', id: 'signup_first_name', type: 'text', isDisable: false,
  },
  {
    label: 'Имя', error_message: 'Неверное имя', name: 'second_name', id: 'signup_second_name', type: 'text', isDisable: false,
  },
  {
    label: 'Номер телефона', error_message: 'Неверный номер', name: 'phone', id: 'signup_phone', type: 'tel', isDisable: false,
  },
  {
    label: 'Пароль', error_message: 'Неверный пароль', name: 'password', id: 'signup_password', type: 'password', isDisable: false,
  },
  {
    label: 'Пароль (еще раз)',
    error_message: 'Пароли не совпадают',
    name: 'confirm_password',
    id: 'signup_confirm_password',
    type: 'password',
    isDisable: false,
  },
];

export const contactsData = [
  {
    photo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shrek-forever-after-1587549453.jpg?crop=0.676xw:0.901xh;0.0969xw,0&resize=980:*',
    name: 'Иван',
    last_message: 'Последнее сообщение',
    date: '12.05.2020',
    unread_messages: '999',
  },
];

export const messagesData = [
  { text: 'Текстовый текст сообщения', date: '12.12.2020' },
  { text: 'В связи с этим я решил опробовать себя в роли рассказчика и затронуть техническую сторону Bitbucket. Прошу не рассматривать моё намерение как попытку рекламы, ибо я совершенно не преследую эту цель. Если эта статья обнаружит интерес со стороны читателей, я буду рад развивать тему и постараюсь ответить на возникающие вопросы.', date: '13.12.2020' },
];

export const dataServerError = { number: 500, message: 'Мы уже фиксим' };

export const dataNotFoundError = { number: 404, message: 'Не туда попали' };
