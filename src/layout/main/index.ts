import './main.css';
import Main from './main';
import LoginPage from '../../pages/login';
import SignupPage from '../../pages/signup';
import NotFoundPage from '../../pages/error/notFound';
import ServerNotResponPage from '../../pages/error/serverNotRespond';
import ChatPage from '../../pages/chat';
import ProfilePage from '../../pages/profile';
import Block from '../../utils/Block';

const loginPage = LoginPage();
const signupPage = SignupPage();
const notFoundPage = NotFoundPage();
const serverNotResponPage = ServerNotResponPage();
const chatPage = ChatPage();
const profilePage = ProfilePage();

const pages:Record<string, Block> = {
  '/profile': profilePage,
  '/chat': chatPage,
  '/login': loginPage,
  '/': loginPage,
  '/signup': signupPage,
  '/notfound': notFoundPage,
  '/servererror': serverNotResponPage,
};

const router = () => {
  const currentRoute = window.location.pathname;
  const page = pages[currentRoute];
  if (page) {
    return page;
  }
  return notFoundPage;
};

function MainLayout(): Main {
  const main = new Main(
    {
      child: router(),
    },
  );
  return main;
}

export default MainLayout;
