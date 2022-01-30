import { Navigate, useParams } from 'react-router-dom';
import { Article } from './Article';
import { utils } from './utils';

export const ThemeObjectText = () => {
  const params = useParams<'post'>();
  const post = utils.getObjectText(params.post);

  if (!post) {
    console.warn('no object text found for slug: ', post);
    return <Navigate to="/" />;
  }

  return <Article article={post} />;
};
