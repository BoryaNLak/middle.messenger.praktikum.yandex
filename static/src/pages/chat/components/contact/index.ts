import './contact.css';
import Contact from './contact';

export default function ContartRender(props): Contact {
  const contact = new Contact({ ...props });
  return contact;
}
