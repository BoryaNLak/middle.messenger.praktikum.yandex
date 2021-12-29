import Handlebars from 'handlebars';

export function renderDOMElement(templateStr, data: object = {}): HTMLElement {
  const template: (props: object) => string = Handlebars.compile(templateStr);

  const templateWithData: string = template(data);
  const wrapper: HTMLElement = document.createElement('div');
  wrapper.innerHTML = templateWithData;

  if (wrapper.childElementCount === 1) {
    return wrapper.childNodes[0] as HTMLElement;
  }

  throw new Error('Шаблон должен содержать 1 элемент');
}

export function setEventListener(eventName, element, callBack) {
  if (typeof (callBack) === 'function' && !!element && !!eventName) {
    element.addEventListener(eventName, callBack);
  }
}

export function compile(templateStr: string, data: object = {}): string {
  const template: (props: object) => string = Handlebars.compile(templateStr);
  return template(data);
}
