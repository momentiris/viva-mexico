import { useParams, Link } from 'react-router-dom';
import { utils } from './utils';

export const NextPost = () => {
  const params = useParams<'theme' | 'post'>();
  if (!params.post || !params.theme) return null;

  const [previousPost, nextPost] = utils.getNextAndPreviousPost(
    params.theme,
    params.post
  );

  return (
    <div className="mx-auto max-w-sm w-full flex justify-between text-xl pt-16 pb-4">
      <div>
        <Link
          className={
            previousPost
              ? 'pointer-events-auto text-gray-800'
              : 'pointer-events-none text-gray-400'
          }
          to={`/themes/${params.theme}/posts/${previousPost}`}
        >
          Previous post
        </Link>
      </div>
      <div>
        <Link
          className={
            nextPost
              ? 'pointer-events-auto text-gray-800'
              : 'pointer-events-none text-gray-400'
          }
          to={`/themes/${params.theme}/posts/${nextPost}`}
        >
          Next post
        </Link>
      </div>
    </div>
  );
};
