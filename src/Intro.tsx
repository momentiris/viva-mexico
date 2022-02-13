import { Article } from './components/Article';
import { Page } from './components/Page';
import { PostContent } from './types';

const article: PostContent = {
  heading: <h1>¡VIVA MÉXICO!</h1>,
  body: [
    <p key="0">
      In Mexico, it is said, the past never dies. Traditions have been mixing
      and reshaping here for thousands of years. The celebration of{' '}
      <i>Día de Muertos</i>, the Day of the Dead, is one example of many.
      Stories about life and death follow us through the exhibition and capture
      a few moments in Mexico’s history. A history filled with conflict and
      tragedy – but also resilience and humor.
    </p>,
    <p key="1">
      It is about worlds that are created and perish, great cultures that
      thrive, an area that is conquered, a country that becomes independent.
      About people who live, celebrate and mourn – then as now.
    </p>,
  ],
};

export const Intro = () => {
  return (
    <Page>
      <Article article={article}></Article>
    </Page>
  );
};
