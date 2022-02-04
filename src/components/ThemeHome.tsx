import { Link } from 'react-router-dom';
import { Theme, ThemeContent as ThemeContentType } from '../types';
import { Page } from './Page';

type ThemeHomeProps = {
  theme: Theme;
};

export const ThemeHome = ({ theme }: ThemeHomeProps) => {
  return (
    <Page>
      <div className="flex flex-col items-center bg-lightGrey h-full">
        <div className="max-w-xl">
          <div className="italic mb-4 text-sm">{theme.labelTranslation}</div>
          {theme.content.map((content, index) => (
            <ThemeContent content={content} key={index} />
          ))}
        </div>
      </div>
    </Page>
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
      <div className="pt-8">
        <h2 className="heading-2">Theme texts</h2>
        {content.timeline.map((timelineInstance) => (
          <div key={timelineInstance.slug} className="mb-2">
            <Link
              to={`posts/${timelineInstance.slug}`}
              className="text-xl underline"
            >
              {timelineInstance.heading}
            </Link>
          </div>
        ))}
      </div>
      <div className="pt-8">
        {Boolean(content.objectTexts.length) && (
          <h2 className="heading-2">Object texts</h2>
        )}
        {content.objectTexts.map((post) => (
          <div key={post.slug} className="mb-2 ">
            <Link to={`object-text/${post.slug}`} className="text-xl underline">
              {post.heading}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
