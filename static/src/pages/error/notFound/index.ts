import './notFound.css';
import NotFound from './notFound';
import { dataServerError } from '../../../utils/constants';

export default function NotFoundPage(): NotFound {
  const notFound = new NotFound(
    {
      number: dataServerError.number,
      message: dataServerError.message,
    },
  );
  return notFound;
}
