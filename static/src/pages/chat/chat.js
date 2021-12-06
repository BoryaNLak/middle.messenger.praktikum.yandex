import tmpl from './chat.tml';
import Сontact from './components/contact';
import Message from './components/message';
import DropdownMenu from '../../components/dropdownMenu';
import { renderDOMElement } from '../../utils/DOMApi';
import { contacts, messages } from '../../utils/constants';
import photoVideoImage from '../../../icons/photo_video.png';
import fileImage from '../../../icons/file.png';
import locationImage from '../../../icons/location.png';
import plusImage from '../../../icons/plus.png';
import crossImage from '../../../icons/cross.png';


const itemsDropdownBottom = [
  { icon: photoVideoImage, text: 'Фото или Видео', onClick: () => {console.log('Click by photo')}},
  { icon: fileImage, text: 'Файл', onClick: () => {console.log('Click by file')}},
  { icon: locationImage, text: 'Локация', onClick: () => {console.log('Click by location')}},
];

const itemsDropdownTop = [
  { icon: plusImage, text: 'Добавить пользователя', onClick: () => {console.log('Click by add')}},
  { icon: crossImage, text: 'Удалить пользователя', onClick: () => {console.log('Click by remove')}},
];


export function render(){
  
  const chatPage = renderDOMElement(tmpl);

  const contactWrapper = chatPage.querySelector('.chat__block_type_contacts');
  const messageWrapper = chatPage.querySelector('.chat__block_type_messages');
  const currentUserContainer = chatPage.querySelector('.chat__block_type_current-user');
  const createMessageContainer = chatPage.querySelector('.chat__block_type_input-message');
  const userMenuButton = chatPage.querySelector('.chat__current-user-menu');
  const messageMenuButton = chatPage.querySelector('.chat__attach-button');
  
  const messageDropdownMenu = DropdownMenu({items: itemsDropdownBottom, styles: 'dropdown-menu_type_left dropdown-menu_type_top'});
  const userDropdownMenu = DropdownMenu({items: itemsDropdownTop, styles: 'dropdown-menu_type_right dropdown-menu_type_bottom'});
  

  const handleClickByMessageMenuButton = () => {    
    messageDropdownMenu.show();
  }

  const handleClickByUserMenuButton = () => {
    userDropdownMenu.show();
    toggleUserMenuButton();
  }

  const toggleUserMenuButton = () => {
    userMenuButton.classList.toggle('chat__current-user-menu_active');
  }
  
  contacts.forEach(contactData  => {
    const handleClick = () => {
      console.log('Click by contact ', contactData);
    }

    const contactElement = Сontact({data: contactData, onClick: handleClick });
    contactWrapper.append(contactElement);
  });

  messages.forEach(messageData  => {
    const handleClick = () => {
      console.log('Click by message ', messageData);
    }

    const messageElement = Message({data: messageData, onClick: handleClick});
    messageWrapper.append(messageElement);
  });

  currentUserContainer.append(userDropdownMenu.getDOM());
  createMessageContainer.append(messageDropdownMenu.getDOM());

  userMenuButton.addEventListener('click', handleClickByUserMenuButton);
  messageMenuButton.addEventListener('click', handleClickByMessageMenuButton);

  return chatPage
}