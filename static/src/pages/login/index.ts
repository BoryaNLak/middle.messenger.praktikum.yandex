import './login.css';
import Login from './login';
import InputCredentialsRender from '../../components/inputCredentials';
import { inputsDataLogin } from '../../utils/constants';

function LoginPage(): Login {
  const login = new Login(
    {
      loginInput: InputCredentialsRender({ ...inputsDataLogin[0] }),
      passwordInput: InputCredentialsRender({ ...inputsDataLogin[1] }),
    },
  );
  return login;
}

export default LoginPage;
