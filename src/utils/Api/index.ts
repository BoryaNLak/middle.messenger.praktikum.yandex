import AuthApi from './authApi';
import SocketApi from './SocketApi';
import ChatApi, { TcreateChat } from './chatApi';
import UserApi, { TchangeProfile, TchangePassword, TchangeAvatar } from './userApi';

const authApi = new AuthApi();
const userApi = new UserApi();
const chatApi = new ChatApi();
const socketApi = new SocketApi();

export {
  authApi,
  userApi,
  chatApi,
  socketApi,
  TchangeProfile,
  TchangePassword,
  TchangeAvatar,
  TcreateChat,
};
