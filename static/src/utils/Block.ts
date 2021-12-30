/* eslint-disable @typescript-eslint/no-empty-function */
import Handlebars from 'handlebars';
import EventBus from './EventBus';

type Iprops = {
  events?: unknown,
  inputs?: HTMLElement[]
}
export default class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  _element = null;

  props: unknown;

  children: unknown;

  eventBus: () => EventBus;

  tagName: string;

  wrapperStyles: string;

  _meta: {
    tagName: string,
    props: unknown,
  };

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

  _registerEvents(eventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _setWrapperStyles(): void {
    this._element.setAttribute('class', this.wrapperStyles);
  }

  _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  _componentDidMount() {
    this.componentDidMount({});
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    Object.values(this.children).forEach((child) => {
      child.dispatchComponentDidMount();
    });
  }

  _componentDidUpdate(oldProps, newProps) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    console.log('asd',response,{ ...this.props })
    this._render();
  }

  _render() {
    const block = this.render();
    this._removeEvents();
    this._element.innerHTML = '';
    try {
      this._element.appendChild(block);
    } catch {
      this._element.innerHTML = block;
    }
    this._addEvents();
    this._setWrapperStyles();
  }

  _makePropsProxy(props) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    console.log(props)
    const self = this;
    return new Proxy(props, {
      get(target, prop) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target: object, prop: string, value: unknown) {
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

  _getChildren(propsAndChildren) {
    const children = {};
    const props = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });
    return { children, props };
  }

  _addEvents() {
    const { events = {} } = this.props;
    Object.keys(events).forEach((eventName) => {
      // const childNode = this._element.childNodes[0];
      // if (childNode) {
      //   childNode.addEventListener(eventName, events[eventName]);
      // }
      this._element.addEventListener(eventName, events[eventName]);
    });
  }

  _removeEvents() {
    const { events = {} } = this.props;
    Object.keys(events).forEach((eventName) => {
      // const childNode = this._element.childNodes[0];
      // if (childNode) {
      //   childNode.removeEventListener(eventName, events[eventName]);
      // }
      this._element.removeEventListener(eventName, events[eventName]);
    });
  }

  _createDocumentElement(tagName: string): HTMLElement | HTMLTemplateElement {
    return document.createElement(tagName);
  }

  init() {
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  componentDidMount(oldProps: unknown) {}

  componentDidUpdate(oldProps: unknown, newProps): boolean {
    return true;
  }

  render() { }

  getContent() {
    // return this._element.childNodes[0];
    return this._element;
  }

  setProps = (nextProps) => {
    if (!nextProps) {
      return;
    }
    Object.assign(this.props, nextProps);
  };

  compile(template, props) {
    const propsAndStubs = { ...props };

    this._removeEvents();

    Object.entries(this.children).forEach(([key, child]) => {
      propsAndStubs[key] = `<div data-id="${child._id}"></div>`;
    });
    const fragment = <HTMLTemplateElement> this._createDocumentElement('template');

    const handlerBarTemplate = Handlebars.compile(template)(propsAndStubs);
    fragment.innerHTML = handlerBarTemplate;
    Object.values(this.children).forEach((child) => {
      const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);
      stub.replaceWith(child.getContent());
    });

    this._addEvents();

    return fragment.content;
  }

  show() {
    this.getContent().style.display = 'block';
  }

  hide() {
    this.getContent().style.display = 'none';
  }
}
