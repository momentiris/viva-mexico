import { PostContent } from './types';

type ArticleProps = {
  content: PostContent;
};
export const Article = ({ content }: ArticleProps) => {
  return (
    <article>
      <h1 className="heading-1">{content.heading}</h1>
      {content.body.map((x) => (
        <p key={x.key} className="mb-4">
          {x}
        </p>
      ))}
    </article>
  );
};
