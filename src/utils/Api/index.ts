import AuthApi from './authApi';
import SocketApi from './SocketApi';
import ChatApi from './chatApi';
import type { TcreateChat } from './chatApi';
import UserApi from './userApi';
import type { TchangeProfile, TchangePassword, TchangeAvatar } from './userApi';

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
