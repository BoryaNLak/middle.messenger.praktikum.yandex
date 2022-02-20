import Store from '../utils/Store';
import Controller from './Controller';
import { authApi } from '../utils/Api';

type TAPIUserData = {
  id: number | null,
  first_name: string | null,
  second_name: string | null,
  display_name: string | null,
  login: string | null,
  avatar: string | null,
  email: string | null,
  phone: string | null,
}

type TInitialValues = TAPIUserData & {
  isLoggedIn: boolean
}

const initialValues: TInitialValues = {
  isLoggedIn: false,
  id: null,
  first_name: null,
  second_name: null,
  display_name: null,
  login: null,
  avatar: null,
  email: null,
  phone: null,
};

class AuthController extends Controller {
  constructor() {
    super('user', initialValues);
    this.init();
  }

  private setUserData(data: TAPIUserData): void {
    this.set(data);
  }

  public getUser() {
    return authApi.getUser()
      .then(this.setUserData)

  }
}
