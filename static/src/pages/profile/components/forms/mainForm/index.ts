import MainForm from './mainForm';
import InputProfileRender from '../../inputProfile';
import { inputsDataProfile } from '../../../../../utils/constants';
import Submit from '../../submit/submit';

function MainFormRender() {
  const mainForm = new MainForm({
    email: InputProfileRender({ ...inputsDataProfile[0] }),
    login: InputProfileRender({ ...inputsDataProfile[1] }),
    first_name: InputProfileRender({ ...inputsDataProfile[2] }),
    second_name: InputProfileRender({ ...inputsDataProfile[3] }),
    nickname: InputProfileRender({ ...inputsDataProfile[4] }),
    phone: InputProfileRender({ ...inputsDataProfile[5] }),
  });
  return mainForm;
}

export default MainFormRender;
