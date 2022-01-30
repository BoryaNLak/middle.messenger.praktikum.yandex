import tmpl from './input.tml';
import { renderDOMElement, setEventListener } from '../../utils/DOMApi';

export function render({ data, onInput }) {
  const handleInput = (evt) => {
    const input = evt.target;
    const { value } = input;
    if (typeof (onInput) === 'function') {
      onInput(value);
    }
  };

  const input = renderDOMElement(tmpl, data);
  setEventListener('input', input, handleInput);
  return input;
}
