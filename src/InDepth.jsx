import { Navigate, useParams } from 'react-router-dom';
import { Article } from './Article';
import { utils } from './utils';

export const InDepth = () => {
  const params = useParams();
  const inDepthText = utils.getInDepthText(params.slug);

  if (!inDepthText) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Article content={inDepthText} />
    </div>
  );
};
