import tmpl from './main.tml';

import NotFoundPage from '../../pages/error/notFound';
import ServerNotRespondError from '../../pages/error/serverNotRespond';
import Login from '../../pages/login';
import Signup from '../../pages/signup';
import Profile from '../../pages/profile';
import Chat from '../../pages/chat';
import { renderDOMElement } from '../../utils/DOMApi';

const mainLayout = renderDOMElement(tmpl);

export function render(){ 

  const pages = {
    '/profile': Profile,
    '/chat': Chat,
    '/login': Login,
    '/': Login,
    '/signup': Signup,
    '/notfound': NotFoundPage,
    '/servererror': ServerNotRespondError,
  }

  const router = () => {
    const currentRoute = window.location.pathname;
    return pages[currentRoute]
  }  
  
  const page = router();
  mainLayout.append(page());
  return mainLayout
}