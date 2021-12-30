import { v4 as makeUUID } from 'uuid';
import tmpl from './button.tml';
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
    this.props = props;
  }

  componentDidUpdate(oldProps, newProps) {
    console.log('Обновление кнопки');
    return true;
  }

  render() {
    // return this.compile(tmpl, this.props);
    return `<span>${this.props.text}</span>`;
  }
}

export default ProfileButton;
