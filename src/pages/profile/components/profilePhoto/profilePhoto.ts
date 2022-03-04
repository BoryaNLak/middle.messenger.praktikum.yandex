import { v4 as makeUUID } from 'uuid';
import tmpl from './profilePhoto.tml';
import Block from '../../../../utils/Block';

type IData = {
  photo: string,
  events: {
    click: () => void,
  }
}

class ProfilePhoto extends Block {
  props: IData;

  _id: string;

  constructor(props: IData) {
    super('div', props);
    this._id = makeUUID();
    this.wrapperStyles = 'profile__photo-wrap';
  }

  componentDidUpdate(): boolean {
    return true;
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}

export default ProfilePhoto;
