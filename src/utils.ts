import { themes } from './content/themes/index';

export const utils = {
  getObjectText: (slug?: string) => {
    return themes
      .flatMap((theme) =>
        theme.content.flatMap((content) => content.objectTexts)
      )
      .find((x) => x.slug === slug);
  },
  getPost: (slug?: string) =>
    themes
      .flatMap((theme) => theme.content.flatMap((content) => content.timeline))
      .find((instance) => instance.slug === slug),
  getInDepthText: (inDepthTextSlug?: string) =>
    themes
      .flatMap((theme) =>
        theme.content.flatMap((content) => content.inDepthTexts)
      )
      .find((inDepthText) => inDepthText.slug === inDepthTextSlug),
  getThemeByThemeName: (themeName?: string) =>
    themes.find((theme) => theme.name === themeName),
  getNextAndPreviousPost: (
    themeName: string,
    currentPost: string
  ): [previousPost?: string, nextPost?: string] => {
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
  },
};
