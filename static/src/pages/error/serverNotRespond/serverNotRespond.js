import Window from '../components/window/index';
import tmpl from './serverNotRespond.tml';
import { renderDOMElement } from '../../../utils/DOMApi';
import { dataServerError } from '../../../utils/constants';

export function render() {
  const page = renderDOMElement(tmpl);
  const window = Window({ data: dataServerError });
  page.append(window);
  return page;
}
