import './serverNotRespond.css';
import ServerNotRespond from './serverNotRespond';
import { dataNotFoundError } from '../../../utils/constants';

export default function ServerNotResponPage(): ServerNotRespond {
  const notFound = new ServerNotRespond(
    {
      number: dataNotFoundError.number,
      message: dataNotFoundError.message,
    },
  );
  return notFound;
}
