import { v4 as makeUUID } from 'uuid';
import Block from '../../Block';
import Router from '../Router';

type TProps = {
  text: string,
  to: string,
  cssClass?: string,
}

class Link extends Block {
  props: TProps;

  _id: string;

  constructor(props: TProps) {
    super('a', props);
    this._id = makeUUID();
    this.wrapperStyles = this.props.cssClass ? this.props.cssClass : '';
    this.setWrapperAttribute('href', this.props.to);
    this.setProps({
      events: {
        click: (evt: Event) => {
          evt.preventDefault();
          Router.go(this.props.to);
        },
      },
    });
  }

  componentDidUpdate() {
    return true;
  }

  render() {
    return this.props.text;
  }
}

export default Link;
