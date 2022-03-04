/* eslint-disable camelcase */
import Controller from './Controller';
import { socketApi } from '../utils/Api';
import { handleError } from '../utils/Error/utils';

export type Tmessage = {
  chat_id: number,
  time: string,
  type: string,
  user_id: number,
  content: string,
}

export type TMessageInitialValues = Record<number, Tmessage[]>

const initialValues: TMessageInitialValues = { 0: [] };

class MessageController extends Controller<TMessageInitialValues> {
  _currentChatId: number | null;

  _currentUserId: number | null;

  constructor() {
    super('messages', initialValues);
    this.init();
    this._currentChatId = null;
    this._currentUserId = null;
    this.handleError = this.handleError.bind(this);
    this.addMessage = this.addMessage.bind(this);
  }

  private initChatContainer(idChat: number) {
    const currentData = this.getMyStore();
    if (currentData) {
      const currentChatData = currentData[idChat];
      if (!currentChatData) {
        const data = { ...currentData, [idChat]: [] } as TMessageInitialValues;
        this.set(data);
      }
    }
  }

  private addMessage(data: Tmessage) {
    const id = this._currentChatId;
    if (data.type && data.type !== 'message') {
      return;
    }
    if (id) {
      const currentData = { ...this.getMyStore() };
      const currentChatData = currentData[id];
      const newChatData = [...currentChatData, data];
      const newData = { ...currentData, [id]: newChatData } as TMessageInitialValues;
      this.set(newData);
    } else {
      throw Error('Chat container not initialised');
    }
  }

  public initChatConnection(userId: number | null, idChat: number | null) {
    if (!userId || !idChat) {
      throw Error('parameter has null value');
    }
    this._currentChatId = idChat;
    this._currentUserId = userId;
    this.initChatContainer(idChat);
    socketApi.getChatToken(idChat)
      .then(({ token }) => {
        if (token) {
          socketApi.initSocket(userId, idChat, token);
          socketApi.addMessageHandler(this.addMessage);
        }
      });
  }

  public getChatMesages() {
    if (this._currentChatId) {
      return this.getMyStore()[this._currentChatId];
    }
    throw new Error('Chat is undefined');
  }

  public sendMessage(message: string) {
    socketApi.sendTextMessage(message);
  }

  public handleError(err: Record<string, unknown>) {
    handleError(err);
  }
}

export default new MessageController();
