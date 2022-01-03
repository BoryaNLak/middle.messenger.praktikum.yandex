import EditPasswordForm from './editPasswordForm';
import InputProfileRender from '../../inputProfile';
import { inputsDataChangePassword } from '../../../../../utils/constants';
import Submit from '../../../../../components/submit/submit';

function EditPasswordFormRender(isEditable = false) {
  const editPasswordForm = new EditPasswordForm({
    oldPassword: InputProfileRender({ ...inputsDataChangePassword[0] }),
    newPassword: InputProfileRender({ ...inputsDataChangePassword[1] }),
    confirmPassword: InputProfileRender({ ...inputsDataChangePassword[2] }),
    submit: isEditable ? new Submit({ text: 'Сохранить' }) : undefined,
  });
  return editPasswordForm;
}

export default EditPasswordFormRender;
