import './notFound.css';
import WindowRender from '../components/window';
import NotFound from './notFound';
import { dataServerError } from '../../../utils/constants';

export default function NotFoundPage(): NotFound {
  const notFound = new NotFound(
    {
      notFoundWindow: WindowRender({ ...dataServerError }),
    },
  );
  return notFound;
}
