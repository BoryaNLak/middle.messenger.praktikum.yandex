import { v4 as makeUUID } from 'uuid';
import tmpl from './MessagesContainer.tml';
import Block from '../../../../utils/Block';
import Message from '../message';
import CurrentUser from '../CurrentUser';
import AddUserModal from '../AddUserModal';
import RemoveUserModal from '../RemoveUserModal';
import DropdownMenu from '../../../../components/dropdownMenu';
import MessageForm from '../messageForm';
import SendMessageButton from '../buttons/SendMessageButton';
import ChooseDataTypeButton from '../buttons/ChooseDataTypeButton';
import MessageList from '../MessageList';
import { ChatController, MessageController, TMessageInitialValues } from '../../../../controllers';
import FormStore from '../../../../utils/FormStore';

import fileImage from '../../../../../static/icons/file.svg';
import locationImage from '../../../../../static/icons/location.svg';
import photoVideoImage from '../../../../../static/icons/photo_video.svg';

type TmessageContainer = {
  messages: TMessageInitialValues,
  selectionChat: {
    id: number,
    name: string,
    avatar: string,
  }
}

const itemsDropdownForm = [
  {
    icon: photoVideoImage,
    text: 'Фото или Видео',
    events: {
      click: () => {
        console.log('Click by photo');
      },
    },
  },
  {
    icon: fileImage,
    text: 'Файл',
    events: {
      click: () => {
        console.log('Click by file');
      },
    },
  },
  {
    icon: locationImage,
    text: 'Локация',
    events: {
      click: () => {
        console.log('Click by location');
      },
    },
  },
];

const FORM_NAME = 'messageForm';

const localStore = FormStore.initFormStore(FORM_NAME);

class MessagesContainer extends Block {
  props: TmessageContainer;

  _id: string;

  children: {
    messages: MessageList,
    currentUser: CurrentUser,
    addUserModal: AddUserModal,
    removeUserModal: RemoveUserModal,
    dropdownFormMenu: DropdownMenu,
    attachButton: ChooseDataTypeButton,
    messageForm: MessageForm,
    sendButton: SendMessageButton,
  };

  constructor(props: TmessageContainer) {
    super('div', props);
    this._id = makeUUID();
    this.wrapperStyles = 'chat__wide-container';
    this.rebuildMessageList = this.rebuildMessageList.bind(this);

    this.children.messages = new MessageList({
      messagesData: this.props.messages[this.props.selectionChat.id],
    });

    this.children.currentUser = new CurrentUser({
      name: this.props.selectionChat ? this.props.selectionChat.name : '',
      avatar: this.props.selectionChat ? this.props.selectionChat.avatar : '',
      handleClickByAddUser: () => {
        this.children.addUserModal.show();
      },
      handleClickByRemoveUser: () => {
        this.children.removeUserModal.show();
      },
    });
    this.children.addUserModal = new AddUserModal({
      handle: (value: {login: string}) => {
        if (this.props.selectionChat && this.props.selectionChat.id) {
          ChatController.addUserTochat(value.login, this.props.selectionChat.id);
        }
      },
    });
    this.children.removeUserModal = new RemoveUserModal({
      handle: (value: {login: string}) => {
        if (this.props.selectionChat && this.props.selectionChat.id) {
          ChatController.removeUserFromChat(value.login, this.props.selectionChat.id);
        }
      },
    });
    this.children.dropdownFormMenu = new DropdownMenu({
      wrapperStyles: 'dropdown-menu_type_left dropdown-menu_type_top',
      dataItems: itemsDropdownForm,
    });
    this.children.attachButton = new ChooseDataTypeButton({
      events: {
        click: () => {
          console.log('click by choose data type file');
          this.children.dropdownFormMenu.toggle();
        },
      },
    });
    this.children.messageForm = new MessageForm({
      handleInput: (value) => {
        localStore.onInput('message', value);
      },
    });
    this.children.sendButton = new SendMessageButton({
      events: {
        click: () => {
          const formData = localStore.getData();
          if (formData.message) {
            const message = formData.message as string;
            MessageController.sendMessage(message);
            localStore.resetStore();
            this.children.messageForm.clear();
          }
        },
      },
    });
  }

  rebuildMessageList() {
    this.children.messages.rebuildMessageList(this.props.messages[this.props.selectionChat.id]);
  }

  componentDidUpdate(oldProps: { [x: string]: any; }, newProps: { [x: string]: any; }): boolean {
    return true;
  }

  render() {
    return this.compile(tmpl, {
      ...this.props,
      messages: this.children.messages,
      currentUser: this.children.currentUser,
      addUserModal: this.children.addUserModal,
      removeUserModal: this.children.removeUserModal,
      messageForm: this.children.messageForm,
      sendButton: this.children.sendButton,
      dropdownFormMenu: this.children.dropdownFormMenu,
      attachButton: this.children.attachButton,
    });
  }
}

export default MessagesContainer;
