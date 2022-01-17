import { themes } from './content/themes/index';

export const utils = {
  getTimelineInstance: (timeLineInstanceSlug?: string) =>
    themes
      .flatMap((theme) => theme.content.flatMap((content) => content.timeline))
      .find((instance) => instance.slug === timeLineInstanceSlug),
  getInDepthText: (inDepthTextSlug?: string) =>
    themes
      .flatMap((theme) =>
        theme.content.flatMap((content) => content.inDepthTexts)
      )
      .find((inDepthText) => inDepthText.slug === inDepthTextSlug),
  getThemeByThemeName: (themeName?: string) =>
    themes.find((theme) => theme.name === themeName),
};
