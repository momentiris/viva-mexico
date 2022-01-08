import { themes } from './content/themes';

export const utils = {
  getTimelineInstance: (timeLineInstanceSlug) =>
    themes
      .flatMap((theme) => theme.content.flatMap((content) => content.timeline))
      .find((instance) => instance.slug === timeLineInstanceSlug),

  getInDepthText: (inDepthTextSlug) =>
    themes
      .flatMap((theme) =>
        theme.content.flatMap((content) => content.inDepthTexts)
      )
      .find((inDepthText) => inDepthText.slug === inDepthTextSlug),
};
