import Store from '../utils/Store';

type Indexed<T = unknown> = {
  [key in string]: T;
};

class Controller {
  private _controllerName: string;

  private _initialValues: Indexed;

  constructor(controllerName: string, initialValues: Indexed) {
    this._controllerName = controllerName;
    this._initialValues = initialValues;
  }

  protected init() {
    Store.set(this._controllerName, this._initialValues);
  }

  protected set(data: Indexed) {
    Store.set(this._controllerName, data);
  }

  public getMyStore() {
    return Store.getState()[this._controllerName];
  }
}

export default Controller;
