/* eslint-disable import/no-extraneous-dependencies */
import chai from 'chai';
import Router from '../utils/Router';
import Login from '../pages/login';
import Signup from '../pages/signup';
import Chat from '../pages/chat';
import Profile from '../pages/profile';
import NotFound from '../pages/error/notFound';
import { PATHS } from '../utils/constants';

const { equal, typeOf } = chai.assert;

describe('Проверяем работу Роута', () => {
  Router
    .use(PATHS.LOGIN_PATH, Login)
    .use(PATHS.SIGNUP_PATH, Signup)
    .use(PATHS.MESSENGER_PATH, Chat)
    .use(PATHS.SETTINGS_PATH, Profile)
    .use(PATHS.OTHER_PATH, NotFound)
    .start();

  it('Проверка на создание роутов', () => {
    equal(Router._isExistPath(PATHS.LOGIN_PATH), true);
    equal(Router._isExistPath(PATHS.SIGNUP_PATH), true);
    equal(Router._isExistPath(PATHS.MESSENGER_PATH), true);
    equal(Router._isExistPath(PATHS.SETTINGS_PATH), true);
    equal(Router._isExistPath('/errorPath'), false);
  });

  it('Нет лишних роутов', () => {
    equal(Router.routes.length, 5);
  });

  it('Возвращает Route', () => {
    typeOf(Router.getRoute(PATHS.LOGIN_PATH), 'object');
    typeOf(Router.getRoute(PATHS.SIGNUP_PATH), 'object');
    typeOf(Router.getRoute(PATHS.MESSENGER_PATH), 'object');
    typeOf(Router.getRoute(PATHS.SETTINGS_PATH), 'object');
    typeOf(Router.getRoute('/errorPath'), 'undefined');
  });
});
