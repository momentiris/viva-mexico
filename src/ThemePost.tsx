import { Navigate, useParams, Link } from 'react-router-dom';
import { Article } from './Article';
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
      <div className="flex flex-grow "></div>
      <NextPost />
    </div>
  );
};

const NextPost = () => {
  const params = useParams<'theme' | 'post'>();
  if (!params.post || !params.theme) return null;

  const [previousPost, nextPost] = utils.getNextAndPreviousPost(
    params.theme,
    params.post
  );

  return (
    <div className="mx-auto max-w-sm w-full flex justify-between text-xl">
      <div>
        {previousPost && (
          <Link to={`/theme/${params.theme}/post/${previousPost}`}>
            Previous post
          </Link>
        )}
      </div>
      <div>
        {nextPost && (
          <Link to={`/theme/${params.theme}/post/${nextPost}`}>Next post</Link>
        )}
      </div>
    </div>
  );
};
