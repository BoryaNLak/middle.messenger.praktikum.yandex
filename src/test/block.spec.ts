/* eslint-disable import/no-extraneous-dependencies */
import jsdom from 'jsdom';
import chai from 'chai';
import Block from '../utils/Block';

const { JSDOM } = jsdom;
const { equal } = chai.assert;

const TEST_TEXT = 'Hellow world';

class Test extends Block {
  constructor(props = {}) {
    super('div', props);
  }

  componentDidUpdate() {
    return true;
  }

  render() {
    return TEST_TEXT;
  }
}

describe('Тестируем Block', () => {
  let window: jsdom.DOMWindow;
  beforeEach(() => {
    window = (new JSDOM('')).window;

    const TestBlock = new Test();
    const main = window.document.createElement('main');
    main.setAttribute('id', 'main');
    main.appendChild(TestBlock.getContent());
    window.document.body.appendChild(main);
  });

  it('Проверяем создание элемента в DOM', () => {
    const div = window.document.querySelector('div');
    equal(!!div, true);
    if (div) {
      const { textContent } = div;
      equal(textContent, TEST_TEXT);
    }
  });
});
