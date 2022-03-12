import Modal from '../../../../components/modal';
import Header from './header';
import AddUserForm from '../UserForm';

const HEADER_TEXT = 'Удалить пользователя';

type IProps = {
  handle: (value: unknown) => void
}

class RemoveUserModal extends Modal {
  constructor(props: IProps) {
    super(props);

    this.children.header = new Header({
      text: HEADER_TEXT,
    });
    this.children.body = new AddUserForm({
      buttonText: 'Удалить',
      handleSubmit: (value) => {
        if (this.props.handle) {
          this.props.handle(value);
        }
      },
    });
  }
}

export default RemoveUserModal;
