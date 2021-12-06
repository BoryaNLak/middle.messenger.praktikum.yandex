import tmpl from './chat.tml';
import Сontact from './components/contact';
import Message from './components/message';
import { renderDOMElement } from '../../utils/DOMApi';
import { contacts, messages } from '../../utils/constants';


export function render(){
  
  const chatPage = renderDOMElement(tmpl);

  const contactWrapper = chatPage.querySelector('.chat__block_type_contacts');
  const messageWrapper = chatPage.querySelector('.chat__block_type_messages');

 
  
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

  return chatPage
}