import { v4 as makeUUID } from 'uuid';
import Block from '../../../../utils/Block';

type IProps = {
  text: string,
  events: {
    click: () => void,
  }
}

class ProfileButton extends Block {
  props: IProps;

  _id: string;

  constructor(props: IProps) {
    super('button', props);
    this._id = makeUUID();
    this.wrapperStyles = 'profile__navigation-buttom profile__navigation-buttom_type_change-data';
    this.setWrapperAttribute('type', 'button');
  }

  hideButton() {
    this.setWrapperStyles('profile__navigation-buttom_hidden');
  }

  setAlertButton() {
    this.setWrapperStyles('profile__navigation-buttom_type_alert');
  }

  componentDidUpdate() {
    return true;
  }

  render() {
    return `<span>${this.props.text}</span>`;
  }
}

export default ProfileButton;
