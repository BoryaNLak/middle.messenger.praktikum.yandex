import UserController, { TLoginData, TUserInitialValues, TSignup } from './userController';
import ChatController, { TChatInitialValues, TUserChat } from './chatController';
import MessageController, { TMessageInitialValues, Tmessage } from './messageController';

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
