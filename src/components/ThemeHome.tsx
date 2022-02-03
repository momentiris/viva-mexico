import { Link } from 'react-router-dom';
import { Theme, ThemeContent as ThemeContentType } from '../types';

type ThemeHomeProps = {
  theme: Theme;
};

export const ThemeHome = ({ theme }: ThemeHomeProps) => {
  return (
    <div className="flex flex-col items-center pt-8 pb-8 px-6">
      <div className="max-w-xl">
        <div className="italic mb-4 text-sm">{theme.label}</div>
        {theme.content.map((content, index) => (
          <ThemeContent content={content} key={index} />
        ))}
      </div>
    </div>
  );
};

type ThemeContentProps = {
  content: ThemeContentType;
};

const ThemeContent = ({ content }: ThemeContentProps) => {
  return (
    <div>
      <h1 className="heading-1">{content.introduction.heading}</h1>
      <div>
        {content.introduction.body.map((textElement) => (
          <p key={textElement.key} className="paragraph">
            {textElement}
          </p>
        ))}
      </div>
      <div className="pt-4">
        <h2 className="heading-2">Theme texts</h2>
        {content.timeline.map((timelineInstance) => (
          <div key={timelineInstance.slug} className="mb-2">
            <Link
              to={`posts/${timelineInstance.slug}`}
              className="text-lg font-semibold"
            >
              {timelineInstance.heading}
            </Link>
          </div>
        ))}
      </div>
      <div className="pt-4">
        {Boolean(content.objectTexts.length) && (
          <h2 className="heading-2">Object texts</h2>
        )}
        {content.objectTexts.map((post) => (
          <Link
            to={`object-text/${post.slug}`}
            className="text-lg font-semibold"
            key={post.slug}
          >
            {post.heading}
          </Link>
        ))}
      </div>
    </div>
  );
};
