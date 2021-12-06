import Window from '../components/window/index';
import tmpl from './notFound.tml';
import { renderDOMElement } from '../../../utils/DOMApi';
import { dataNotFoundError } from '../../../utils/constants';

export function render() {
  const page = renderDOMElement(tmpl);
  const window = Window({ data: dataNotFoundError });
  page.append(window);
  return page;
}
