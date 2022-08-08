import HTTPTransport from '../HTTPTransport';
import { YANDEX_API_URL, YANDEX_SOCKET } from '../constants';

type ThandlerData = Record<string | number, string | number>

type Thandler = (data:ThandlerData) => void

class SocketApi extends HTTPTransport {
  _socket: WebSocket | null;

  constructor() {
    super();
    this._socket = null;
  }

  getChatToken(idChat: number) {
    return this.post(`${YANDEX_API_URL}/chats/token/${idChat}`, {
      credentials: 'include',
    })
      .then(this.extractResponse);
  }

  initSocket(userId: number, chatId: number, token: string) {
    this._socket = new WebSocket(`${YANDEX_SOCKET}/chats/${userId}/${chatId}/${token}`);
    this.setEventListeners();
  }

  addOpenHandler() {
    if (this._socket) {
      this._socket.addEventListener('open', () => {
        console.log('Соединение установлено');
      });
    }
  }

  addCloseHandler() {
    if (this._socket) {
      this._socket.addEventListener('close', (evt: CloseEvent) => {
        if (evt.wasClean) {
          console.log('Соединение закрыто чисто');
        } else {
          console.log('Обрыв соединения');
        }
        console.log(`Код: ${evt.code} | Причина: ${evt.reason}`);
      });
    }
  }

  addMessageHandler(handler: Thandler) {
    if (this._socket) {
      this._socket.addEventListener('message', (evt: MessageEvent) => {
        const data = JSON.parse(evt.data);
        handler(data);
      });
    }
  }

  addErrorHandler() {
    if (this._socket) {
      this._socket.addEventListener('error', (evt: ErrorEvent) => {
        console.log('Ошибка', evt.message);
      });
    }
  }

  sendTextMessage(content: string) {
    if (this._socket) {
      this._socket.send(JSON.stringify({
        type: 'message',
        content,
      }));
    }
  }

  getMessageList(content: string) {
    if (this._socket) {
      this._socket.send(JSON.stringify({
        type: 'get old',
        content,
      }));
    }
  }

  closeConnection() {
    if (this._socket) {
      this._socket.close();
      this._socket = null;
    }
  }

  setEventListeners() {
    this.addOpenHandler();
    this.addCloseHandler();
    this.addErrorHandler();
  }
}

export default SocketApi;
