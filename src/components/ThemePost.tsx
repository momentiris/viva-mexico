import { Navigate, useParams } from 'react-router-dom';
import { utils } from '../utils';
import { Article } from './Article';

import { NextPost } from './NextPost';

export const ThemePost = () => {
  const params = useParams<'post'>();
  const post = utils.getPost(params.post);

  if (!post) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex flex-grow flex-col  h-full">
      <Article article={post} />
      <div className="flex flex-grow " />

      <NextPost />
    </div>
  );
};
