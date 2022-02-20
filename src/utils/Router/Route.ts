import Block from '../Block';

type Tprops = {
  rootQuery: string,
}
type BlockConstructor = {
  new (): Block;
};

function isEqual(lhs: string, rhs: string) {
  return lhs === rhs;
}

function render(query: string, block: Block) {
  const root: HTMLElement | null = document.querySelector(query);
  if (root instanceof HTMLElement) {
    root.innerHTML = '';
    root.appendChild(block.getContent());
    block.dispatchComponentDidMount();
  }
  return root;
}

class Route {
  _pathname: string;

  _block: Block | null;

  _blockClass: BlockConstructor;

  _props: Tprops;

  constructor(pathname: string, view: BlockConstructor, props: Tprops) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.hide();
      this._block = null;
    }
  }

  match(pathname: string) {
    return isEqual(pathname, this._pathname);
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass();
      render(this._props.rootQuery, this._block);
      return;
    }

    this._block.show();
  }
}

export default Route;
