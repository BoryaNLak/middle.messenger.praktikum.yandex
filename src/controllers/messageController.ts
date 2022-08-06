/* eslint-disable camelcase */
import Controller from './Controller';
import { socketApi, chatApi } from '../utils/Api';
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

const toUTCDate = (strDate: string) => Date.parse(strDate);

const sortMessages = (messageArray: Tmessage[]) => {
  const res = messageArray.sort((prevMessage, message) => (toUTCDate(prevMessage.time) - toUTCDate(message.time)));
  return res;
};

class MessageController extends Controller<TMessageInitialValues> {
  _currentChatId: number | null;

  _currentUserId: number | null;

  _updateBlock: () => void;

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
    if (data instanceof Array && id) {
      const currentData = this.getMyStore();
      const newData = { ...currentData, [id]: data } as TMessageInitialValues;
      this.set(newData);
      this._updateBlock();
    }
    if (data.type && data.type !== 'message') {
      return;
    }
    if (id) {
      const currentData = this.getMyStore();
      const currentChatData = currentData[id];
      const newChatData = sortMessages([...currentChatData, data]);
      const newData = { ...currentData, [id]: newChatData } as TMessageInitialValues;
      this.set(newData);
      this._updateBlock();
    } else {
      throw Error('Chat container not initialised');
    }
  }

  public setUpdater(updateBlock: () => void) {
    this._updateBlock = updateBlock;
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
          this.getMessageList(String(idChat));
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

  public async getMessageList(chatId: string) {
    const chatNumber = await chatApi.getUnreadMessageNumber(chatId);
    if (chatNumber) {
      socketApi.getMessageList('0');
    }
  }

  public handleError(err: Record<string, unknown>) {
    handleError(err);
  }
}

export default new MessageController();
