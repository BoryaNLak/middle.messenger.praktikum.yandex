import './serverNotRespond.css';
import WindowRender from '../components/window';
import ServerNotRespond from './serverNotRespond';
import { dataNotFoundError } from '../../../utils/constants';

export default function ServerNotResponPage(): ServerNotRespond {
  const notFound = new ServerNotRespond(
    {
      serverNotRespondWindow: WindowRender({ ...dataNotFoundError }),
    },
  );
  return notFound;
}
