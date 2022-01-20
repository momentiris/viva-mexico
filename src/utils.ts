import { themes } from './content/themes/index';

export const utils = {
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
