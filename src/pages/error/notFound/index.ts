import './notFound.css';
import NotFound from './notFound';
import { dataNotFoundError } from '../../../utils/constants';

export default function NotFoundPage(): NotFound {
  const notFound = new NotFound(
    {
      number: dataNotFoundError.number,
      message: dataNotFoundError.message,
      link: dataNotFoundError.link,
    },
  );
  return notFound;
}
