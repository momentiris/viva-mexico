import { Link } from 'react-router-dom';
import { Theme, ThemeContent as ThemeContentType } from './types';

type ThemeHomeProps = {
  theme: Theme;
};

export const ThemeHome = ({ theme }: ThemeHomeProps) => {
  return (
    <div>
      <h1 className="heading-1">{theme.label}</h1>
      {theme.content.map((content, index) => (
        <ThemeContent content={content} key={index} />
      ))}

      {Boolean(theme.objectTexts.length) && (
        <h2 className="heading-1">Object texts</h2>
      )}
      {theme.objectTexts.map((content) => (
        <div key={content.slug}>{content.heading}</div>
      ))}
    </div>
  );
};

type ThemeContentProps = {
  content: ThemeContentType;
};

const ThemeContent = ({ content }: ThemeContentProps) => {
  return (
    <div>
      <h2 className="text-xl font-bold">{content.introduction.heading}</h2>
      <div>
        {content.introduction.body.map((textElement) => (
          <div key={textElement.key} className="mb-4">
            {textElement}
          </div>
        ))}
      </div>
      <div>
        <h2>Texts</h2>
        {content.timeline.map((timelineInstance) => (
          <div key={timelineInstance.slug} className="mb-2">
            <Link
              to={`post/${timelineInstance.slug}`}
              className="text-lg font-semibold"
            >
              {timelineInstance.heading}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
