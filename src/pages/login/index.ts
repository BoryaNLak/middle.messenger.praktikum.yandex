import './login.css';
import Login from './login';

function LoginPage(): Login {
  const login = new Login(
    {},
  );
  return login;
}

export default LoginPage;
