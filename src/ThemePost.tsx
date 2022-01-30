import { Navigate, useParams, Link } from 'react-router-dom';
import { Article } from './Article';
import { NextPost } from './NextPost';
import { utils } from './utils';

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
