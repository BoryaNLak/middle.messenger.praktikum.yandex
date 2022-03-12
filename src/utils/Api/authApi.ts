/* eslint-disable camelcase */
import HTTPTransport from '../HTTPTransport';
import { YANDEX_API_URL } from '../constants';

type Tsignin = {
  login: string,
  password: string,
};
type Tsignup = {
  first_name: string,
  second_name: string,
  login: string,
  email: string,
  password: string,
  phone: string,
}

class AuthApi extends HTTPTransport {
  signup(data: Tsignup) {
    return this.post(`${YANDEX_API_URL}/auth/signup`, {
      data,
      credentials: 'include',
    })
      .then(this.extractResponse);
  }

  signin(data:Tsignin) {
    return this.post(`${YANDEX_API_URL}/auth/signin`, {
      data,
      credentials: 'include',
    })
      .then(this.extractResponse);
  }

  getUser() {
    return this.get(
      `${YANDEX_API_URL}/auth/user`,
      {
        credentials: 'include',
      },
    )
      .then(this.extractResponse);
  }

  checkAuthorization() {
    return this.get(
      `${YANDEX_API_URL}/auth/user`,
      {
        credentials: 'include',
      },
    )
      .catch((err) => {
        if (err.status === 401) {
          return Promise.resolve(false);
        }
        return Promise.resolve(true);
      });
  }

  logout() {
    return this.post(
      `${YANDEX_API_URL}/auth/logout`,
      { credentials: 'include' },
    )
      .then(this.extractResponse);
  }
}

export default AuthApi;
