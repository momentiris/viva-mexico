export type Post = {
  slug: string;
  heading: JSX.Element;
  body: JSX.Element[];
  labelTexts: JSX.Element[];
  objectTexts: PostContent[];
};

export type Theme = {
  name: string;
  label: string;
  content: ThemeContent[];
  inDepthTexts: JSX.Element[];
};

type ThemeContent = {
  label: string;
  introduction: PostContent;
  inDepthTexts: InDepthText[];
  timeline: Post[];
  labels: string[];
};

type PostContent = {
  heading: JSX.Element;
  body: JSX.Element[];
};

type InDepthText = {
  slug: string;
  name: string;
  heading: JSX.Element;
  body: JSX.Element[];
};

type LabelTexts = JSX.Element[];

type ObjectTexts = JSX.Element[];
type Slug = { slug: string };
