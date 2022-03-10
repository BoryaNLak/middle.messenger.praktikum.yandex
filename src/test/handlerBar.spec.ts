/* eslint-disable import/no-extraneous-dependencies */
import chai from 'chai';
import Handlebars from 'handlebars';

const { equal, typeOf } = chai.assert;

describe('Проверяем работу шаблонизатора', () => {
  const name = 'NameTemplate';
  const template = '<div>{{ name }}</div>';
  const templateResult = `<div>${name}</div>`;
  const handlerBarTemplate = Handlebars.compile(template)({ name });

  it('Возвращает шаблон с нужными параметрами', () => {
    equal(handlerBarTemplate, templateResult);
  });
});
