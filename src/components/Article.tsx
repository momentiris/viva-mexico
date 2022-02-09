import { PostContent } from '../types';

type ArticleProps = {
  article: PostContent;
};

export const Article = ({ article }: ArticleProps) => {
  return (
    <article className="flex flex-col items-center pt-8">
      <div className="max-w-xl">
        <div className="heading-1">{article.heading}</div>
        {article.body.map((p) => (
          <div key={p.key} className="paragraph">
            {p}
          </div>
        ))}
      </div>
    </article>
  );
};
