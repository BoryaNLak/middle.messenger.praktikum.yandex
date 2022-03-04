/* eslint-disable max-classes-per-file */
class LocalSore {
  _store: Record<string, string | FileList>;

  constructor() {
    this._store = {};
  }

  onInput(fieldName: string, value: string | FileList) {
    this._setData(fieldName, value);
  }

  _setData(name: string, value: string | FileList) {
    this._store[name] = value;
  }

  resetStore() {
    Object.keys(this._store).forEach((key) => {
      this._store[key] = '';
    });
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
