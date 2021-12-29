import { v4 as makeUUID } from 'uuid';
import tmpl from './mainForm.tml';
import Block from '../../../../../utils/Block';
import InputProfile from '../../inputProfile/inputProfile';

type IProps = {
  email: InputProfile,
  login: InputProfile,
  first_name: InputProfile,
  second_name: InputProfile,
  nickname: InputProfile,
  phone: InputProfile,
}

class MainForm extends Block {
  props: IProps;

  _id: string;

  constructor(props: IProps) {
    super('div', props);
    this.props = props;
    this._id = makeUUID();
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}

export default MainForm;
