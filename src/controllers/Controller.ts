import Store from '../utils/Store';

class Controller<T> {
  private _controllerName: string;

  private _initialValues: T;

  constructor(controllerName: string, initialValues: T) {
    this._controllerName = controllerName;
    this._initialValues = initialValues;
  }

  protected init() {
    Store.init(this._controllerName, this._initialValues);
  }

  protected set(data: T) {
    // const clone = cloneDeep(data);
    Store.set(this._controllerName, data);
  }

  public getMyStore(): T | never {
    const currentController = Store.getState()[this._controllerName];
    if (currentController) {
      return currentController as T;
    }
    throw new Error('Controller is uninitialised');
  }
}

export default Controller;
