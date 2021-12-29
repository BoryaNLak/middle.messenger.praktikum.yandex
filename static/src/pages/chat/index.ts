import './chat.css';
import Chat from './chat';
import MessageRender from './components/message';
import ContartRender from './components/contact';
import { contactsData, messagesData } from '../../utils/constants';

export default function ChatPage(): Chat {
  const chat = new Chat(
    {
      contacts: ContartRender({ ...contactsData[0] }),
      messages: MessageRender({ ...messagesData[0] }),
    },
  );
  return chat;
}
