import UserController from './userController';
import type { TLoginData, TUserInitialValues, TSignup } from './userController';
import ChatController from './chatController';
import type { TChatInitialValues, TUserChat } from './chatController';
import MessageController from './messageController';
import type { TMessageInitialValues, Tmessage } from './messageController';

type TStore = {
  user: TUserInitialValues,
  chat: TChatInitialValues,
  messages: TMessageInitialValues,
}

export {
  UserController,
  ChatController,
  MessageController,
  TLoginData,
  TSignup,
  Tmessage,
  TUserInitialValues,
  TChatInitialValues,
  TMessageInitialValues,
  TUserChat,
  TStore,
};
