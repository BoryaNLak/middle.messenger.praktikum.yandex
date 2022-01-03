import { v4 as makeUUID } from 'uuid';
import Block from '../../../../utils/Block';

type IProps = {
  events: {
    click: () => void,
  }
}

class ProfileNavigationButton extends Block {
  props: IProps;

  _id: string;

  constructor(props: IProps) {
    super('button', props);
    this._id = makeUUID();
    this.wrapperStyles = 'profile__button-back';
    this.setWrapperAttribute('type', 'button');
  }

  componentDidUpdate(oldProps, newProps) {
    return true;
  }

  render() {
    return '';
  }
}

export default ProfileNavigationButton;
