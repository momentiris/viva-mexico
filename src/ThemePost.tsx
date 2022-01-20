import { Navigate, useParams } from 'react-router-dom';
import { Article } from './Article';
import { utils } from './utils';

export const ThemePost = () => {
  const params = useParams<'post'>();
  const post = utils.getPost(params.post);

  if (!post) {
    return <Navigate to="/" />;
  }

  return <Article content={post} />;
};
