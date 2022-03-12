/* eslint-disable no-multi-assign */
/* eslint-disable import/no-extraneous-dependencies */
import sinon from 'sinon';
import { expect } from 'chai';
import { authApi, chatApi, userApi } from '../utils/Api';
import { YANDEX_API_URL } from '../utils/constants';

describe('Тестируем API', () => {
  const requests: sinon.SinonFakeXMLHttpRequest[] = [];
  beforeEach(() => {
    let xhr: sinon.SinonFakeXMLHttpRequestStatic;
    (global as any).XMLHttpRequest = xhr = sinon.useFakeXMLHttpRequest();

    xhr.onCreate = (request: sinon.SinonFakeXMLHttpRequest) => {
      requests.push(request);
    };
  });

  afterEach(() => {
    (global as any).XMLHttpRequest.restore();
    requests.length = 0;
  });

  it('Проверяем параметры запроса signin', () => {
    const data = {
      login: 'qwerty',
      password: 'qwerty1234S',
    };

    authApi.signin(data);

    expect(requests.length).to.eq(1);
    expect(requests[0].method).to.eq('POST');
    expect(requests[0].requestBody).to.eq(JSON.stringify(data));
    expect(requests[0].url).to.eq(`${YANDEX_API_URL}/auth/signin`);
  });

  it('Проверяем параметры запроса signup', () => {
    const data = {
      first_name: 'Jack',
      second_name: 'Green',
      login: 'qwerty',
      email: 'qwerty@help.com',
      password: 'qwerty1234S',
      phone: '89999999999',
    };

    authApi.signup(data);

    expect(requests.length).to.eq(1);
    expect(requests[0].method).to.eq('POST');
    expect(requests[0].requestBody).to.eq(JSON.stringify(data));
    expect(requests[0].url).to.eq(`${YANDEX_API_URL}/auth/signup`);
  });

  it('Проверяем параметры запроса getUserById', () => {
    const userId = 213;

    userApi.getUserById(userId);

    expect(requests.length).to.eq(1);
    expect(requests[0].method).to.eq('GET');
    expect(requests[0].url).to.eq(`${YANDEX_API_URL}/user/${userId}`);
  });

  it('Проверяем параметры запроса addUserToChat', () => {
    const data = {
      users: [123, 124, 125],
      chatId: 852,
    };

    chatApi.addUserToChat(data);

    expect(requests.length).to.eq(1);
    expect(requests[0].method).to.eq('PUT');
    expect(requests[0].requestBody).to.eq(JSON.stringify(data));
    expect(requests[0].url).to.eq(`${YANDEX_API_URL}/chats/users`);
  });
});
