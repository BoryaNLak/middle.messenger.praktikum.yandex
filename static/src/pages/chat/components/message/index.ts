import './message.css';
import Message from './message';

export default function MessageRender(props): Message {
  const message = new Message({ ...props });
  return message;
}
