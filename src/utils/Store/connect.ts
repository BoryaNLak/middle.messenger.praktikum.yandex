import Block from '../Block';
import Store, { StoreEvents } from './Store';

type Indexed<T = unknown> = {
  [key in string]: T;
};

function connect(Component: typeof Block, mapStateToProps: (state: Indexed) => Indexed) {
  return class extends Component {
    constructor(props: Indexed) {
      super({ ...props, ...mapStateToProps(Store.getState()) });
      console.log('!!!!!!!!!!!!!!!!', props);
      Store.on(StoreEvents.Updated, () => {
        console.log('======== +++++++ ========');
        console.log(Component)
        console.log({ ...Store.getState() });
        console.log({ ...mapStateToProps(Store.getState()) });
        console.log({ ...this.props });
        this.setProps({ ...mapStateToProps(Store.getState()) });
        console.log('======== ******* ========');
      });
    }
  };
}

export default connect;
