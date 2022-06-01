import HTTPTransport from '../HTTPTransport';
import { YANDEX_API_URL } from '../constants';

type TchangeProfile = {
  first_name: string,
  second_name: string,
  display_name: string,
  login: string,
  email: string,
  phone: string,
}

type TchangePassword = {
  oldPassword: string,
  newPassword: string,
}

type TchangeAvatar = FormData

class UserApi extends HTTPTransport {
  changeUserProfile(data: TchangeProfile) {
    return this.put(`${YANDEX_API_URL}/user/profile`, {
      data,
      credentials: 'include',
    })
      .then(this.extractResponse);
  }

  changeUserPassword(data: TchangePassword) {
    return this.put(`${YANDEX_API_URL}/user/password`, {
      data,
      credentials: 'include',
    })
      .then(this.extractResponse);
  }

  changeUserAvatar(data: TchangeAvatar) {
    return this.put(`${YANDEX_API_URL}/user/profile/avatar`, {
      data,
      credentials: 'include',
      headers: {
      },
    })
      .then(this.extractResponse);
  }

  getUserById(userID: number) {
    return this.get(`${YANDEX_API_URL}/user/${userID}`, {
      credentials: 'include',
    })
      .then(this.extractResponse);
  }

  userSearch(login: string) {
    return this.post(`${YANDEX_API_URL}/user/search`, {
      credentials: 'include',
      data: {
        login,
      },
    })
      .then(this.extractResponse);
  }
}

export default UserApi;

export {
  TchangeProfile,
  TchangePassword,
  TchangeAvatar,
};
