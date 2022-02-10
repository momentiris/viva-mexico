import { Navigate, useParams } from 'react-router-dom';

import { utils } from '../utils';
import { Article } from './Article';
import { NextPost } from './NextPost';
import { Page } from './Page';

export const ThemePost = () => {
  const params = useParams<'post'>();
  const post = utils.getPostBySlug(params.post);

  if (!post) {
    return <Navigate to="/" />;
  }

  return (
    <Page>
      <div className="flex flex-col flex-grow">
        <Article article={post} />
        <NextPost />
      </div>
    </Page>
  );
};
