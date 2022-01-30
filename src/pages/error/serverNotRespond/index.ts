import './serverNotRespond.css';
import ServerNotRespond from './serverNotRespond';
import { dataServerError } from '../../../utils/constants';

export default function ServerNotResponPage(): ServerNotRespond {
  const notFound = new ServerNotRespond(
    {
      number: dataServerError.number,
      message: dataServerError.message,
      link: dataServerError.link,
    },
  );
  return notFound;
}
