import { Navigate, useParams } from 'react-router-dom';
import { Article } from './Article.jsx';
import { utils } from './utils';

export const InDepth = () => {
  const params = useParams();
  const inDepthText = utils.getInDepthText(params.slug);

  if (!inDepthText) {
    return <Navigate to="/" />;
  }

  return <Article content={inDepthText} />;
};
