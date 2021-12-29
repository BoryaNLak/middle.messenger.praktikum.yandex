import './signup.css';
import Signup from './signup';
import InputCredentialsRender from '../../components/inputCredentials';
import { inputsDataSignup } from '../../utils/constants';

export default function SignupPage(): Signup {
  const signup = new Signup(
    {
      emailInput: InputCredentialsRender({ ...inputsDataSignup[0] }),
      loginInput: InputCredentialsRender({ ...inputsDataSignup[1] }),
      firstNameInput: InputCredentialsRender({ ...inputsDataSignup[2] }),
      secondNameInput: InputCredentialsRender({ ...inputsDataSignup[3] }),
      phoneInput: InputCredentialsRender({ ...inputsDataSignup[4] }),
      passwordInput: InputCredentialsRender({ ...inputsDataSignup[5] }),
      confirmPasswordInput: InputCredentialsRender({ ...inputsDataSignup[6] }),
    },
  );
  return signup;
}
