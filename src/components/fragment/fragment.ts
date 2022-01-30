import { v4 as makeUUID } from 'uuid';
import Block from '../../utils/Block';

type IProps = {
  events?: Record<string, () => void>,
}

class Fragment extends Block {
  props: IProps;

  _id: string;

  constructor(props: IProps) {
    super('div', props);
    this._id = makeUUID();
  }

  render() {
    return '';
  }
}

export default Fragment;
