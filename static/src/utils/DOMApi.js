import Handlebars from 'handlebars';

export function renderDOMElement(templateStr, data = {}){
  const template = Handlebars.compile(templateStr);
  const templateWithData = template(data); 
  const wrapper = document.createElement('div');
  wrapper.innerHTML = templateWithData;

  if (wrapper.childElementCount === 1){
    return wrapper.childNodes[0]
  }
  else {
    throw new Error('Шаблон должен содержать 1 элемент')
  }
}

export function setEventListener(eventName, element, callBack){
  if (typeof(callBack) === 'function' && !!element && !!eventName) {
    element.addEventListener(eventName, callBack);
  }
}