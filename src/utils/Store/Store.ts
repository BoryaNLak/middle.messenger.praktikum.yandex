/* eslint-disable no-shadow */
import EventBus from '../EventBus';
import { set, cloneDeep } from '../utils';

type Indexed<T = unknown> = {
  [key in string]: T;
};

export enum StoreEvents {
  Updated = 'updated',
}

class Store extends EventBus {
  private state: Indexed = {};

  public init(path: string, value: unknown) {
    set(this.state, path, value);
  }

  public getState() {
    return this.state;
  }

  public set(path: string, value: unknown) {
    // this.state = cloneDeep(this.state);
    set(this.state, path, value);
    this.emit(StoreEvents.Updated);
  }
}

export default new Store();
