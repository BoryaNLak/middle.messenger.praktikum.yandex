import './window.css';
import Window from './window';

export default function WindowRender(props) {
  const window = new Window({ ...props });
  return window;
}
