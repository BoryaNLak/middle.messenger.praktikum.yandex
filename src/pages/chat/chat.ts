import tmpl from './chat.tml';
import Block from '../../utils/Block';
import MessageForm from './components/messageForm';
import FormStore from '../../utils/FormStore';
import SendMessageButton from './components/buttons/SendMessageButton';
import ChooseDataTypeButton from './components/buttons/ChooseDataTypeButton';
import UserMenuButton from './components/buttons/userMenuButton';
import Message from './components/message';
import Contact from './components/contact';
import DropdownMenu from '../../components/dropdownMenu';

import fileImage from '../../../static/icons/file.svg';
import locationImage from '../../../static/icons/location.svg';
import photoVideoImage from '../../../static/icons/photo_video.svg';
import plusImage from '../../../static/icons/plus.svg';
import crossImage from '../../../static/icons/cross.svg';
import { contactsData, messagesData } from '../../utils/constants';

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

const itemsDropdownTop = [
  {
    icon: plusImage,
    text: 'Добавить пользователя',
    events: {
      click: () => {
        console.log('Click by add');
      },
    },
  },
  {
    icon: crossImage,
    text: 'Удалить пользователя',
    events: {
      click: () => {
        console.log('Click by remove');
      },
    },
  },
];

const FORM_NAME = 'messageForm';

const localStore = FormStore.initFormStore(FORM_NAME);

type IProps = {
  events?: Record<string, () => void>
}

class Chat extends Block {
  props: IProps;

  children: {
    messageForm: MessageForm,
    sendButton: SendMessageButton,
    attachButton: ChooseDataTypeButton,
    userMenuButton: UserMenuButton,
    dropdownFormMenu: DropdownMenu,
    dropdownUserMenu: DropdownMenu,
    messages: Array<Message>,
    contacts: Array<Contact>,
  };

  constructor(props: IProps) {
    super('section', props);
    this.wrapperStyles = 'chats';
    this.resetStyleStateMessages = this.resetStyleStateMessages.bind(this);
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
            console.log(formData);
          }
        },
      },
    });
    this.children.userMenuButton = new UserMenuButton({
      events: {
        click: () => {
          console.log('click by user menu button');
          this.children.dropdownUserMenu.toggle();
        },
      },
    });

    this.children.attachButton = new ChooseDataTypeButton({
      events: {
        click: () => {
          console.log('click by choose data type file');
          this.children.dropdownFormMenu.toggle();
        },
      },
    });

    this.children.messages = messagesData.map((item) => (new Message({
      ...item,
      handleReseteStyle: this.resetStyleStateMessages,
    })));
    this.children.contacts = contactsData.map((item) => (new Contact({
      ...item,
    })));

    this.children.dropdownFormMenu = new DropdownMenu({
      wrapperStyles: 'dropdown-menu_type_left dropdown-menu_type_top',
      dataItems: itemsDropdownForm,
    });
    this.children.dropdownUserMenu = new DropdownMenu({
      wrapperStyles: 'dropdown-menu_type_right dropdown-menu_type_bottom',
      dataItems: itemsDropdownTop,
    });
  }

  resetStyleStateMessages() {
    this.children.messages.forEach((message) => {
      message.resetStyleState();
    });
  }

  componentDidUpdate(): boolean {
    return true;
  }

  render() {
    return this.compile(tmpl, {
      ...this.props,
      messageForm: this.children.messageForm,
      sendButton: this.children.sendButton,
      messages: this.children.messages,
      contacts: this.children.contacts,
      dropdownFormMenu: this.children.dropdownFormMenu,
      attachButton: this.children.attachButton,
      userMenuButton: this.children.userMenuButton,
      dropdownUserMenu: this.children.dropdownUserMenu,
    });
  }
}

export default Chat;
