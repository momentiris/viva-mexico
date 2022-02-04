import { Navigate, useParams } from 'react-router-dom';
import { utils } from '../utils';
import { Article } from './Article';

import { NextPost } from './NextPost';
import { Page } from './Page';

export const ThemePost = () => {
  const params = useParams<'post'>();
  const post = utils.getPost(params.post);

  if (!post) {
    return <Navigate to="/" />;
  }

  return (
    <Page>
      <div className="flex flex-grow flex-col h-full bg-lightGrey">
        <Article article={post} />
        <div className="flex flex-grow " />
        <NextPost />
      </div>
    </Page>
  );
};
