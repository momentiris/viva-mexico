import { Navigate, useParams } from 'react-router-dom';

import { Page, Article } from '.';
import { utils } from '../utils';

export const InDepth = () => {
  const params = useParams<'slug'>();

  const inDepthText = utils.getInDepthTextBySlug(params.slug);

  if (!inDepthText) {
    return <Navigate to="/" />;
  }

  return (
    <Page>
      <Article article={inDepthText} />
    </Page>
  );
};
