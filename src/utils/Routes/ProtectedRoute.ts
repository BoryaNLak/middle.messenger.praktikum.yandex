import Block from '../Block';
import router from '../Router';
import { UserController } from '../../controllers';
import { PATHS } from '../constants';

type Indexed<U = unknown> = {
  [key in string]: U;
};

function ProtectedRoute(Component: typeof Block) {
  const isLoggedIn = UserController.isLoggedIn();
  if (!isLoggedIn) {
    router.go(PATHS.LOGIN_PATH);
  }
  return class extends Component {
    constructor(tag: string, props: Indexed) {
      super(tag, { ...props });
    }
  };
}

export default ProtectedRoute;
