/* eslint-disable camelcase */
import HTTPTransport from '../HTTPTransport';
import { YANDEX_API_URL } from '../constants';

type Tdata = Record<string, string>;
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
  signup({
    first_name, second_name, login, email, password, phone,
  }: Tsignup) {
    const data: Tsignup = {
      first_name, second_name, login, email, password, phone,
    };
    return this.post(`${YANDEX_API_URL}/auth/signup`, {
      data,
    })
      .then(this.checkResponse);
  }

  signin(data:Tsignin): Promise<XMLHttpRequest> {
    return this.post(`${YANDEX_API_URL}/auth/signin`, {
      data,
    })
      .then(this.checkResponse);
  }

  getUser() {
    return this.get(`${YANDEX_API_URL}/auth/user`, {})
      .then(this.checkResponse);
  }

  logout() {
    return this.post(`${YANDEX_API_URL}/auth/logout`, {})
      .then(this.checkResponse);
  }
}

export default AuthApi;
