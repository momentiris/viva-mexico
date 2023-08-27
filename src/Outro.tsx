import { Article } from './components/Article';
import { Page } from './components/Page';
import { PostContent } from './types';

const article: PostContent = {
  heading: <h1>Outro</h1>,
  body: [
    <p key="0">
      Here we have shared some moments and traditions from Mexico's past, which,
      in different ways, shape and influence the country today. We have seen how
      death and life are both opposite and related. Mexico's history is not one
      story, but many. And the stories do not end, they continue.
    </p>,
  ],
};

export const Outro = () => {
  return (
    <Page>
      <Article article={article}></Article>
    </Page>
  );
};
