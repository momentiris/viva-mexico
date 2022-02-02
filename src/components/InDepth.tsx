import { Navigate, useParams } from 'react-router-dom';
import { Article } from './Article';
import { utils } from '../utils';

export const InDepth = () => {
  const params = useParams<'slug'>();
  const inDepthText = utils.getInDepthText(params.slug);

  if (!inDepthText) {
    return <Navigate to="/" />;
  }

  return <Article article={inDepthText} />;
};
