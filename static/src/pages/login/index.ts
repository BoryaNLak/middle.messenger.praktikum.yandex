import './login.css';
import Login from './login';
import InputCredentialsRender from '../../components/inputCredentials';
import { inputsDataLogin } from '../../utils/constants';

export default function LoginPage(): Login {
  const login = new Login(
    {
      loginInput: InputCredentialsRender({ ...inputsDataLogin[0] }),
      passwordInput: InputCredentialsRender({ ...inputsDataLogin[1] }),
    },
  );
  return login;
}
