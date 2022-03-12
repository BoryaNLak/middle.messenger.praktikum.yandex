import Modal from '../../../../components/modal';
import Header from './header';
import CreateChatForm from '../CreateChatForm';

const HEADER_TEXT = 'Создать чат';

type IProps = {
  handle: (value: unknown) => void
}

class CreateChatModal extends Modal {
  constructor(props: IProps) {
    super(props);

    this.children.header = new Header({
      text: HEADER_TEXT,
    });
    this.children.body = new CreateChatForm({
      handleSubmit: (value) => {
        if (this.props.handle) {
          this.props.handle(value);
        }
      },
    });
  }
}

export default CreateChatModal;
