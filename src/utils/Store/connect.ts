import Block from '../Block';
import Store, { StoreEvents } from './Store';

type Indexed<T = unknown> = {
  [key in string]: T;
};

function connect(Component: typeof Block, mapStateToProps: (state: Indexed) => Indexed) {
  return class extends Component {
    constructor(tag: string, props: Indexed) {
      super(tag, { ...props, ...mapStateToProps(Store.getState()) });
      Store.on(StoreEvents.Updated, () => {
        this.setProps({ ...mapStateToProps(Store.getState()) });
      });
    }
  };
}

export default connect;
