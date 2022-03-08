// import { equal } from 'assert';
import Router from '../utils/Router';
import Login from '../pages/login';
import Signup from '../pages/signup';
import NotFound from '../pages/error/notFound';
import { PATHS } from '../utils/constants';

describe('Проверяем работу Роута', () => {
  Router
    .use(PATHS.LOGIN_PATH, Login)
    .use(PATHS.SIGNUP_PATH, Signup)
    .use(PATHS.OTHER_PATH, NotFound)
    .start();

  it('Переход по страницам должен возвращать соответствующий компонент', () => {
    // equal(Router.go(PATHS.SIGNUP_PATH), Signup);
  });
});
