import { Link } from 'react-router-dom';

export const ThemeHome = ({ theme }) => {
  return (
    <div>
      <h1 className="heading-1">{theme.label}</h1>
      {theme.content.map((content, index) => (
        <ThemeContent content={content} key={index} />
      ))}
    </div>
  );
};

const ThemeContent = ({ content }) => {
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
        {content.timeline.map((timelineInstance) => (
          <div key={timelineInstance.slug} className="mb-2">
            <Link to={timelineInstance.slug} className="text-lg font-semibold">
              {timelineInstance.heading}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
