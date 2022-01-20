import { themes } from './content/themes/index';

export const utils = {
  getObjectText: (slug?: string) => {
    return themes
      .flatMap((theme) =>
        theme.content
          .flatMap((content) => content.timeline)
          .flatMap((timeline) => timeline.objectTexts)
          .concat(themes.flatMap((theme) => theme.objectTexts))
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
};
