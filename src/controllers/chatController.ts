/* eslint-disable consistent-return */
import Controller from './Controller';
import { chatApi, TcreateChat } from '../utils/Api';
import { UserController } from '.';
import { handleError } from '../utils/Error/utils';

type TLastUser = {
  first_name: string | null,
  second_name: string | null,
  display_name: string | null,
  login: string | null,
  avatar: string | null,
  email: string | null,
  phone: string | null,
}

type TSearchUser = TLastUser & {
  id: number
}

export type TUserChat = {
  id: number,
  title: string,
  avatar: string,
  unread_count: number,
  last_message: {
    user: TLastUser
  },
  time: string,
  content: string,
};

export type TChatInitialValues = TUserChat[];

const initialValues: TChatInitialValues = [

];

class ChatController extends Controller<TChatInitialValues> {
  constructor() {
    super('chat', initialValues);
    this.init();
    this.handleError = this.handleError.bind(this);
    this.setData = this.setData.bind(this);
    this.getChats = this.getChats.bind(this);
  }

  public setData(data: TChatInitialValues) {
    this.set(data);
    return Promise.resolve();
  }

  public getChats() {
    return chatApi.getChats()
      .then(this.setData)
      .catch(this.handleError);
  }

  public createChat(data: TcreateChat) {
    return chatApi.createChat(data)
      .then(() => {
        this.getChats();
      })
      .catch(this.handleError);
  }

  public addUserTochat(login: string, idChat: number) {
    return UserController.userSearch(login)
      .then((usersArray: TSearchUser[]) => {
        if (usersArray && usersArray.length > 0) {
          return chatApi.addUserToChat({ users: usersArray.map((item) => (item.id)), chatId: idChat })
            .then(() => Promise.resolve(true))
            .catch(this.handleError);
        }
        console.log(`По логину - [ ${login} ] не нашлось пользователей`);
      })
      .catch(this.handleError);
  }

  public removeUserFromChat(login: string, idChat: number) {
    return UserController.userSearch(login)
      .then((usersArray: TSearchUser[]) => {
        if (usersArray && usersArray.length > 0) {
          return chatApi.removeUserFromChat({ users: usersArray.map((item) => (item.id)), chatId: idChat })
            .then(() => Promise.resolve(true))
            .catch(this.handleError);
        }
        console.log(`По логину - [ ${login} ] не нашлось пользователей`);
      })
      .catch(this.handleError);
  }

  public handleError(err: Record<string, unknown>) {
    handleError(err);
  }
}

export default new ChatController();
