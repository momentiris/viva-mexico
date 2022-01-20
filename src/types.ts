export type Post = {
  slug: string;
  heading: JSX.Element;
  body: JSX.Element[];
  labelTexts: JSX.Element[];
  objectTexts: ObjectText[];
};

export type Theme = {
  name: string;
  label: string;
  labelTranslation?: string;
  content: ThemeContent[];
  inDepthTexts: JSX.Element[];
  objectTexts: ObjectText[];
};

export type ThemeContent = {
  label: string;
  introduction: PostContent;
  inDepthTexts: InDepthText[];
  timeline: Post[];
  labels: string[];
};

export type PostContent = {
  heading: JSX.Element;
  body: JSX.Element[];
  finePrint?: string;
  photographTexts?: string[];
};

export type ObjectText = Pick<Post, 'heading' | 'body' | 'slug'> & {
  photographTexts?: string[];
  finePrint?: string;
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
