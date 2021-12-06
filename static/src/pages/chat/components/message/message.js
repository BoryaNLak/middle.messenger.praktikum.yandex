import { renderDOMElement, setEventListener } from '../../../../utils/DOMApi';

import tmpl from './message.tml';

export function render({ data, onClick }){
  const messageElement = renderDOMElement(tmpl, data);
  setEventListener('click', messageElement, onClick,)
  return messageElement
}