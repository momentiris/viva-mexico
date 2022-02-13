import { themes } from './content/themes/index';
import { inDepthTexts } from './content/in-depth-texts';

export const utils = {
  deriveBgFromThemeName,
  deriveColorFromThemeName,
  getInDepthTextBySlug,
  getObjectTextBySlug,
  getPostBySlug,
  getThemeByThemeName,
  getNextAndPreviousPost,
};

function getNextAndPreviousPost(
  themeName: string,
  currentPost: string
): [previousPost?: string, nextPost?: string] {
  const timeline = utils
    .getThemeByThemeName(themeName)
    ?.content.map((x) => x.timeline)
    .flat();

  const currentPostIndex = timeline?.findIndex((x) => x.slug === currentPost);

  if (!timeline || currentPostIndex === undefined) {
    return [];
  }

  return [
    timeline[currentPostIndex - 1]?.slug,
    timeline[currentPostIndex + 1]?.slug,
  ];
}

function deriveBgFromThemeName(themeName: string) {
  return {
    intro: 'bg-red',
    myths: 'bg-beige',
    origin: 'bg-red',
    independence: 'bg-blue',
    colonization: 'bg-orange',
    'dia-de-muertos': 'bg-grey',
  }[themeName];
}

function deriveColorFromThemeName(themeName: string) {
  return {
    intro: 'text-red',
    'creation-myths': 'text-beige',
    'death-myths': 'text-beige',
    origin: 'text-red',
    independence: 'text-blue',
    colonization: 'text-orange',
    'dia-de-muertos': 'text-grey',
  }[themeName];
}

function getInDepthTextBySlug(slug?: string) {
  return inDepthTexts.find((post) => post.slug === slug);
}

function getObjectTextBySlug(slug?: string) {
  return themes
    .flatMap((theme) => theme.content.flatMap((content) => content.objectTexts))
    .find((x) => x.slug === slug);
}

function getPostBySlug(slug?: string) {
  return themes
    .flatMap((theme) => theme.content.flatMap((content) => content.timeline))
    .find((instance) => instance.slug === slug);
}

function getThemeByThemeName(themeName?: string) {
  return themes.find((theme) => theme.name === themeName);
}
