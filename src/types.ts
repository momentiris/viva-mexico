import React from 'react';

export type Post = {
  slug: string;
  heading: JSX.Element;
  body: JSX.Element[];
  labelTexts: JSX.Element[];
};

export type Theme = {
  name: string;
  label: string;
  labelTranslation?: string;
  content: ThemeContent[];
};

export type ThemeContent = {
  label: string;
  introduction: PostContent;
  timeline: Post[];
  labels: string[];
  objectTexts: ObjectText[];
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

export type InDepthText = {
  slug: string;
  name: string;
  heading: JSX.Element;
  body: JSX.Element[];
  locale: Locale;
};

export type Model = {
  slug: string;
  label: string;
  element: React.ReactNode;
  theme: string;
};

export type Locale = 'en' | 'sv' | 'mx';
