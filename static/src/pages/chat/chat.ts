import tmpl from './chat.tml';
import Block from '../../utils/Block';
import MessageForm from './components/messageForm';
import FormStore from '../../utils/FormStore';
import SendMessageButton from './components/buttons/SendMessageButton';
import ContartRender from './components/contact';
import MessageRender from './components/message';

// import Сontact from './components/contact';
// import Message from './components/message';
// import DropdownMenu from '../../components/dropdownMenu';
// import { renderDOMElement } from '../../utils/DOMApi';
// import { contacts, messages } from '../../utils/constants';

// import photoVideoImage from '../../../icons/photo_video.png';
// import fileImage from '../../../icons/file.png';
// import locationImage from '../../../icons/location.png';
// import plusImage from '../../../icons/plus.png';
// import crossImage from '../../../icons/cross.png';

// const itemsDropdownBottom = [
//   {
//     icon: photoVideoImage,
//     text: 'Фото или Видео',
//     onClick: () => {
//       console.log('Click by photo');
//     },
//   },
//   { icon: fileImage, text: 'Файл', onClick: () => { console.log('Click by file'); } },
//   { icon: locationImage, text: 'Локация', onClick: () => { console.log('Click by location'); } },
// ];

// const itemsDropdownTop = [
//   { icon: plusImage, text: 'Добавить пользователя', onClick: () => { console.log('Click by add'); } },
//   { icon: crossImage, text: 'Удалить пользователя', onClick: () => { console.log('Click by remove'); } },
// ];

// export function render(): HTMLElement {
//   const chatPage: HTMLElement = renderDOMElement(tmpl);

//   const contactWrapper: HTMLElement = chatPage.querySelector('.chat__block_type_contacts');
//   const messageWrapper: HTMLElement = chatPage.querySelector('.chat__block_type_messages');
//   const currentUserContainer: HTMLElement = chatPage.querySelector('.chat__block_type_current-user');
//   const createMessageContainer: HTMLElement = chatPage.querySelector('.chat__block_type_input-message');
//   const userMenuButton: HTMLElement = chatPage.querySelector('.chat__current-user-menu');
//   const messageMenuButton: HTMLElement = chatPage.querySelector('.chat__attach-button');

//   const messageDropdownMenu = DropdownMenu({ items: itemsDropdownBottom, styles: 'dropdown-menu_type_left dropdown-menu_type_top' });
//   const userDropdownMenu = DropdownMenu({ items: itemsDropdownTop, styles: 'dropdown-menu_type_right dropdown-menu_type_bottom' });

//   const handleClickByMessageMenuButton = (): void => {
//     messageDropdownMenu.show();
//   };

//   const toggleUserMenuButton = (): void => {
//     userMenuButton.classList.toggle('chat__current-user-menu_active');
//   };

//   const handleClickByUserMenuButton = (): void => {
//     userDropdownMenu.show();
//     toggleUserMenuButton();
//   };

//   contacts.forEach((contactData): void => {
//     const handleClick = (): void => {
//       console.log('Click by contact ', contactData);
//     };

//     const contactElement = Сontact({ data: contactData, onClick: handleClick });
//     contactWrapper.append(contactElement);
//   });

//   messages.forEach((messageData) => {
//     const handleClick = () => {
//       console.log('Click by message ', messageData);
//     };

//     const messageElement = Message({ data: messageData, onClick: handleClick });
//     messageWrapper.append(messageElement);
//   });

//   currentUserContainer.append(userDropdownMenu.getDOM());
//   createMessageContainer.append(messageDropdownMenu.getDOM());

//   userMenuButton.addEventListener('click', handleClickByUserMenuButton);
//   messageMenuButton.addEventListener('click', handleClickByMessageMenuButton);

//   return chatPage;
// }

const FORM_NAME = 'messageForm';

const localStore = FormStore.initFormStore(FORM_NAME);

type IProps = {
  contacts: HTMLElement,
  messages: HTMLElement,
  events?: Record<string, () => void>
}

class Chat extends Block {
  props: IProps;

  children: {
    messageForm: MessageForm,
    sendButton: SendMessageButton,
  };

  constructor(props: IProps) {
    super('section', props);
    this.wrapperStyles = 'chats';
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
  }

  componentDidUpdate(oldProps, newProps): boolean {
    return true;
  }

  render() {
    return this.compile(tmpl, {
      ...this.props,
      messageForm: this.children.messageForm,
      sendButton: this.children.sendButton,
    });
  }
}

export default Chat;
