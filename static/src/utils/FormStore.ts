/* eslint-disable max-classes-per-file */
class LocalSore {
  _store: Record<string, string>;

  constructor() {
    this._store = {};
  }

  onInput(fieldName: string, value: string) {
    this._setData(fieldName, value);
  }

  _setData(name: string, value: string) {
    this._store[name] = value;
  }

  getData() {
    return this._store;
  }
}

class FormStore {
  _store: Record<string, LocalSore>;

  constructor() {
    this._store = {};
  }

  initFormStore(formName: string) {
    this._store[formName] = new LocalSore();
    return this._store[formName];
  }
}

const formStore = new FormStore();
export default formStore;
