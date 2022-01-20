import { PostContent } from './types';

type ArticleProps = {
  article: PostContent;
};

export const Article = ({ article }: ArticleProps) => {
  return (
    <article>
      <h1 className="heading-1">{article.heading}</h1>
      {article.body.map((p) => (
        <p key={p.key} className="mb-4">
          {p}
        </p>
      ))}
    </article>
  );
};
