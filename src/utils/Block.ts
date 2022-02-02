/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-this-alias */
import Handlebars from 'handlebars';
import EventBus from './EventBus';

type Iprops = Record<string, any>;
type Ichildren = Record<string, Block | Array<Block>>;

class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  _element: HTMLElement | HTMLTemplateElement;

  props: Iprops;

  children: Ichildren;

  eventBus: () => EventBus;

  tagName: string;

  wrapperStyles: string;

  _meta: {
    tagName: string,
    props: unknown,
  };

  _id: string;

  constructor(tagName = 'div', propsAndChildren = {}) {
    const eventBus = new EventBus();
    const { children, props } = this._getChildren(propsAndChildren);
    this.children = children;
    this.wrapperStyles = '';
    this._meta = {
      tagName,
      props,
    };

    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  setWrapperStyles(classStyle = ''): void {
    this.wrapperStyles = `${this.wrapperStyles} ${classStyle}`;
    this.setWrapperAttribute('class', `${this.wrapperStyles}`);
  }

  removeStyles(classStyle = ''): void {
    this.getContent().classList.remove(classStyle);
  }

  setWrapperAttribute(attribute:string, value:string): void {
    this._element.setAttribute(attribute, value);
  }

  _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  _componentDidMount() {
    this.componentDidMount({});
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    Object.values(this.children).forEach((child) => {
      if (child) {
        if (Array.isArray(child)) {
          child.forEach((item) => {
            item.dispatchComponentDidMount();
          });
        } else {
          child.dispatchComponentDidMount();
        }
      }
    });
  }

  _componentDidUpdate(oldProps: Record<string, string | Block>, newProps: Record<string, string | Block>) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    this._render();
  }

  _render() {
    const block = this.render();

    this._removeEvents();
    this._element.innerHTML = '';
    if (block instanceof Node) {
      this._element.appendChild(block);
    } else if (typeof block === 'string') {
      this._element.innerHTML = block;
    }
    this._addEvents();
    this.setWrapperStyles();
  }

  _makePropsProxy(props: Iprops) {
    const self = this;
    return new Proxy(props, {
      get(target, prop: string) {
        const value: any = target[prop];
        if (typeof value === 'function') {
          return value.bind(target);
        }
        return value;
      },
      set(target, prop: string, value) {
        const clone = { ...target };
        target[prop] = value;
        self.eventBus().emit(Block.EVENTS.FLOW_CDU, clone, target);
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }

  _getChildren(propsAndChildren: Record<string, boolean |string | Block | Array<Block>>) {
    const children: Ichildren = {};
    const props: Record<string, string | boolean> = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else if (Array.isArray(value)) {
        if (value.every((item) => (item instanceof Block))) {
          children[key] = value;
        }
      } else {
        props[key] = value;
      }
    });
    return { children, props };
  }

  _addEvents() {
    const { events = {} } = this.props;
    Object.keys(events).forEach((eventName: string) => {
      this._element.addEventListener(eventName, events[eventName]);
    });
  }

  _removeEvents() {
    const { events = {} } = this.props;
    Object.keys(events).forEach((eventName) => {
      this._element.removeEventListener(eventName, events[eventName]);
    });
  }

  redefineEvent(eventName:string, handler: () => void) {
    const events = { ...this.props.events };
    events[eventName] = handler;
    this._removeEvents();
    this.setProps({ events });
  }

  _createDocumentElement<T extends HTMLElement>(name: string): T {
    const element = document.createElement(name);
    return element as T;
  }

  init() {
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  componentDidMount(oldProps: Iprops) {}

  componentDidUpdate(oldProps: Iprops, newProps: Iprops): boolean {
    return true;
  }

  render():void | Node | string {}

  getContent() {
    return this._element;
  }

  setProps = (nextProps: Iprops) => {
    if (!nextProps) {
      return;
    }
    Object.assign(this.props, nextProps);
  };

  compile(template: string, props:Iprops): DocumentFragment {
    const propsAndStubs = { ...props };

    this._removeEvents();
    Object.entries(this.children).forEach(([key, child]) => {
      if (Array.isArray(child)) {
        propsAndStubs[key] = `<div data-id="${child[0]._id}"></div>`;
      } else {
        propsAndStubs[key] = `<div data-id="${child._id}"></div>`;
      }
    });
    const fragment = <HTMLTemplateElement> this._createDocumentElement('template');

    const handlerBarTemplate = Handlebars.compile(template)(propsAndStubs);
    fragment.innerHTML = handlerBarTemplate;
    Object.values(this.children).forEach((child) => {
      if (Array.isArray(child)) {
        let stub: HTMLElement | null = fragment.content.querySelector(`[data-id="${child[0]._id}"]`);
        child.forEach((item, index) => {
          if (index === 0) {
            const content = item.getContent();
            if (stub instanceof HTMLElement) {
              stub.replaceWith(content);
              stub = content;
            }
          } else {
            const content = item.getContent();
            if (stub instanceof HTMLElement) {
              stub.after(content);
            }
          }
        });
      } else {
        const stub: HTMLElement | null = fragment.content.querySelector(`[data-id="${child._id}"]`);
        if (stub instanceof HTMLElement) {
          stub.replaceWith(child.getContent());
        }
      }
    });

    this._addEvents();
    return fragment.content;
  }
}

export default Block;
