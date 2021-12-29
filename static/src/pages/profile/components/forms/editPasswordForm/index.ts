import EditPasswordForm from './editPasswordForm';
import InputProfileRender from '../../inputProfile';
import { inputsDataChangePassword } from '../../../../../utils/constants';

function EditPasswordFormRender() {
  const editPasswordForm = new EditPasswordForm({
    oldPassword: InputProfileRender({ ...inputsDataChangePassword[0] }),
    newPassword: InputProfileRender({ ...inputsDataChangePassword[1] }),
    confirmPassword: InputProfileRender({ ...inputsDataChangePassword[2] }),
  });
  return editPasswordForm;
}

export default EditPasswordFormRender;
