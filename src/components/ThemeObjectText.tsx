import { Navigate, useParams } from 'react-router-dom';

import { Article } from './Article';
import { utils } from '../utils';
import { Page } from './Page';

export const ThemeObjectText = () => {
  const params = useParams<'post'>();
  const post = utils.getObjectTextBySlug(params.post);

  if (!post) {
    console.warn('no object text found for slug: ', post);
    return <Navigate to="/" />;
  }

  return (
    <Page>
      <Article article={post} />
    </Page>
  );
};
