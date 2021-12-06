import { renderDOMElement } from '../../../../utils/DOMApi';
import tmpl from './window.tml';

export function render({ data }) {
  const window = renderDOMElement(tmpl, data)
  return window
}