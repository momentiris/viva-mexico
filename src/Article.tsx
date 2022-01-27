import { PostContent } from './types';

type ArticleProps = {
  article: PostContent;
};

export const Article = ({ article }: ArticleProps) => {
  return (
    <article className="flex flex-col items-center">
      <h1 className="heading-1">{article.heading}</h1>
      {article.body.map((p) => (
        <p key={p.key} className="paragraph">
          {p}
        </p>
      ))}
    </article>
  );
};
