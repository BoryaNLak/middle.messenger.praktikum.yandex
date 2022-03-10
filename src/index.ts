import './index.css';
import Router from './utils/Router/Router';
import Chat from './pages/chat';
import Profile from './pages/profile';
import Login from './pages/login';
import Signup from './pages/signup';
import NotFound from './pages/error/notFound';
import ProtectedRoute from './utils/Routes/ProtectedRoute';
import { PATHS } from './utils/constants';

Router
  .use(PATHS.LOGIN_PATH, Login)
  .use(PATHS.SIGNUP_PATH, Signup)
  .use(PATHS.MESSENGER_PATH, ProtectedRoute(Chat))
  .use(PATHS.SETTINGS_PATH, ProtectedRoute(Profile))
  .use(PATHS.OTHER_PATH, NotFound)
  .start();
