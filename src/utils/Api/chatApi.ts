import HTTPTransport from '../HTTPTransport';
import { YANDEX_API_URL } from '../constants';

type TcreateChat = {
  title: string,
}

type TaddUserToChat = {
  users: number[],
  chatId: number,
}

type TremoveUserFromChat = TaddUserToChat;

class ChatApi extends HTTPTransport {
  getChats() {
    return this.get(`${YANDEX_API_URL}/chats`, {
      credentials: 'include',
    })
      .then(this.extractResponse);
  }

  getUnreadMessageNumber(chatId: string) {
    return this.get(`${YANDEX_API_URL}/chats/new/${chatId}`, {
      credentials: 'include',
    })
      .then(this.extractResponse);
  }

  createChat(data: TcreateChat) {
    return this.post(`${YANDEX_API_URL}/chats`, {
      credentials: 'include',
      data,
    })
      .then(this.extractResponse);
  }

  addUserToChat(data: TaddUserToChat) {
    return this.put(`${YANDEX_API_URL}/chats/users`, {
      credentials: 'include',
      data,
    })
      .then(this.extractResponse);
  }

  removeUserFromChat(data: TremoveUserFromChat) {
    return this.delete(`${YANDEX_API_URL}/chats/users`, {
      credentials: 'include',
      data,
    })
      .then(this.extractResponse);
  }
}

export default ChatApi;

export {
  TcreateChat,
  TaddUserToChat,
  TremoveUserFromChat,
};
