import Modal from '../../../../components/modal';
import Header from './header';
import ChangePhotoForm from '../forms/changePhotoForm';

const HEADER_TEXT = 'Загрузите файл';

type IProps = {
  handle: (value: unknown) => void
}

class PhotoModal extends Modal {
  constructor(props: IProps) {
    super(props);

    this.children.header = new Header({
      text: HEADER_TEXT,
    });
    this.children.body = new ChangePhotoForm({
      handleSubmit: (value) => {
        if (this.props.handle) {
          this.props.handle(value);
        }
      },
    });
  }
}

export default PhotoModal;
