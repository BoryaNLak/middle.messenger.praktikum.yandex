import { renderDOMElement, setEventListener } from '../../../../utils/DOMApi';
import tmpl from './contact.tml';



export function render({data, onClick }){  
  
  const contact  = renderDOMElement(tmpl, data);  
  setEventListener('click', contact, onClick)

  return contact
}