import Controller from './Controller';
import router from '../utils/Router/Router';
import { PATHS } from '../utils/constants';
import {
  authApi, userApi, TchangeProfile, TchangePassword, TchangeAvatar, chatApi,
} from '../utils/Api';
import { ChatController } from '.';
import { handleError } from '../utils/Error/utils';

type TAPIUserData = {
  id: number | null,
  first_name: string | null,
  second_name: string | null,
  display_name: string | null,
  login: string | null,
  avatar: string | null,
  email: string | null,
  phone: string | null,
}

export type TSignup = {
  first_name: string,
  second_name: string,
  login: string,
  email: string,
  phone: string,
  password: string,
}

export type TUserInitialValues = TAPIUserData & {
  isLoggedIn: boolean
}

export type TLoginData = {
  login: string,
  password: string,
}

const initialValues: TUserInitialValues = {
  isLoggedIn: false,
  id: null,
  first_name: null,
  second_name: null,
  display_name: null,
  login: null,
  avatar: null,
  email: null,
  phone: null,
};

class UserController extends Controller<TUserInitialValues> {
  constructor() {
    super('user', initialValues);
    this.init();
    this.getUser = this.getUser.bind(this);
    this.getInitialData = this.getInitialData.bind(this);
    this.setUserData = this.setUserData.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  private setUserData(data: TUserInitialValues): Promise<unknown> {
    this.set(data);
    return Promise.resolve();
  }

  public getUser() {
    return authApi.getUser()
      .then(this.setUserData)
      .catch(this.handleError);
  }

  public login(data: TLoginData) {
    return authApi.signin(data)
      .then(() => Promise.resolve());
  }

  public logout() {
    return authApi.logout()
      .then(() => {
        this.setUserData(initialValues);
      })
      .catch(this.handleError);
  }

  public checkAuthorization() {
    return authApi.checkAuthorization()
      .then((match) => {
        if (match) {
          this.getInitialData()
            .then(() => {
              router.go(PATHS.MESSENGER_PATH);
            });
        }
      })
      .catch(this.handleError);
  }

  public getInitialData() {
    return Promise.all([
      authApi.getUser(),
      chatApi.getChats(),
    ])
      .then(([user, chats]) => {
        ChatController.setData(chats);
        this.setUserData(user);
      })
      .catch(this.handleError);
  }

  public signup(data:TSignup) {
    return authApi.signup(data)
      .then(() => {
        router.go(PATHS.LOGIN_PATH);
      })
      .catch(this.handleError);
  }

  public isLoggedIn() {
    return this.getMyStore().isLoggedIn;
  }

  public changeUserProfile(data: TchangeProfile) {
    return userApi.changeUserProfile(data)
      .then(this.setUserData)
      .then(() => {
        console.log('Данные пользователя успешно изменены');
      })
      .catch(this.handleError);
  }

  public changeUserPassword(data: TchangePassword) {
    return userApi.changeUserPassword(data)
      .then(() => {
        console.log('Пароль изменен');
      })
      .catch(this.handleError);
  }

  public changeAvatar(data: TchangeAvatar) {
    return userApi.changeUserAvatar(data)
      .then(this.setUserData)
      .then(() => {
        console.log('Аватар успешно изменен');
      })
      .catch(this.handleError);
  }

  public getUserById(userId: number) {
    return userApi.getUserById(userId)
      .then(this.setUserData)
      .catch(this.handleError);
  }

  public userSearch(login: string): Promise<any> {
    return userApi.userSearch(login)
      .then((user) => Promise.resolve(user))
      .catch(this.handleError);
  }

  public handleError(err: Record<string, unknown>) {
    handleError(err);
  }
}

export default new UserController();
