import React from 'react';
import { Link } from 'react-router-dom';

import { Theme, ThemeContent as ThemeContentType } from '../types';
import { Page } from './Page';

type ThemeHomeProps = {
  theme: Theme;
};

export const ThemeHome = ({ theme }: ThemeHomeProps) => {
  return (
    <Page>
      <div className="flex flex-col items-center">
        <div className="max-w-xl">
          <div className="italic mb-4 pt-4 text-sm">
            {theme.labelTranslation}
          </div>
          <div className="flex flex-col gap-16">
            {theme.content.map((content, index) => (
              <ThemeContent content={content} key={index} />
            ))}
          </div>
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
      {content.introduction?.heading && (
        <h1 className="heading-1">{content.introduction.heading}</h1>
      )}
      <div>
        {content.introduction?.body.map((textElement) => (
          <React.Fragment key={textElement.key}>{textElement}</React.Fragment>
        ))}
      </div>
      {content.timeline.length > 0 && (
        <div className="pt-8">
          <h2 className="heading-2">Theme texts</h2>
          {content.timeline.map((timelineInstance) => (
            <div key={timelineInstance.slug} className="mb-2">
              <Link
                to={`posts/${timelineInstance.slug}`}
                className="text-xl underline underline-offset-1"
              >
                {timelineInstance.heading}
              </Link>
            </div>
          ))}
        </div>
      )}
      <div className="pt-8">
        {Boolean(content.objectTexts.length) && (
          <h2 className="heading-2">Object texts</h2>
        )}
        {content.objectTexts.map((post) => (
          <div key={post.slug} className="mb-2 ">
            <Link
              to={`object-text/${post.slug}`}
              className="text-xl underline underline-offset-1"
            >
              {post.heading}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
