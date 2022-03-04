import Modal from '../../../../components/modal';
import Header from './header';
import AddUserForm from '../UserForm';

const HEADER_TEXT = 'Добавить пользователя';

type IProps = {
  handle: (value: unknown) => void
}

class AddUserModal extends Modal {
  constructor(props: IProps) {
    super(props);

    this.children.header = new Header({
      text: HEADER_TEXT,
    });
    this.children.body = new AddUserForm({
      buttonText: 'Добавить',
      handleSubmit: (value) => {
        if (this.props.handle) {
          this.props.handle(value);
        }
      },
    });
  }
}

export default AddUserModal;
