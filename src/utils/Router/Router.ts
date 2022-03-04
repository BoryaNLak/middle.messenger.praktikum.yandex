import Route from './Route';
import Block from '../Block';

type Indexed<U = unknown> = {
  [key in string]: U;
};

type BlockConstructor<T extends Block> = {
  new (props: Indexed): T,
};

class Router {
  routes: Route[];

  _rootQuery: string;

  _currentRoute: Route | null;

  history: History;

  __instance: Router;

  static __instance: Router;

  constructor(rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;

    Router.__instance = this;
  }

  use<T extends Block>(pathname: string, block: BlockConstructor<T>) {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery });
    this.routes.push(route);
    return this;
  }

  start() {
    window.onpopstate = (event: Event) => {
      if (event.currentTarget === window) {
        this._onRoute(window.location.pathname);
      }
    };

    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string) {
    let path: string = pathname;

    if (!this._isExistPath(path) && this._isExistPath('/*')) {
      path = '/*';
    }

    const route = this.getRoute(path);

    if (this._currentRoute) {
      this._currentRoute.leave();
    }

    if (route) {
      this._currentRoute = route;
      route.render();
    }
  }

  _isExistPath(pathname: string): boolean {
    return this.routes.some((item) => item.match(pathname));
  }

  go(pathname: string) {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  getRoute(pathname: string): Route | undefined {
    return this.routes.find((route) => route.match(pathname));
  }
}

const router = new Router('.page');

export default router;
