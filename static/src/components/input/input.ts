import { v4 as makeUUID } from 'uuid';
import tmpl from './input.tml';
import Block from '../../utils/Block';

type IProps = {
  onInput?: () => void,
  value?: string
  id?: string,
  label?: string,
  error_message?: string,
  name?: string,
  type?: string,
  styles: {
    form_group_styles: string,
    label_styles: string,
    input_styles: string,
    error_styles: string
  },
}

class Input extends Block {
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

export default Input;
