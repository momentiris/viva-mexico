import { Post, Theme } from '../../types';

const aClashOfWorlds: Post = {
  slug: 'a-clash-of-worlds',
  heading: <span>A clash of worlds</span>,
  body: [
    <span key="0">
      To colonize means to take control of an area. Spain's colonization of the
      Americas was a turbulent and violent history, with enormous consequences.
      The country of Mexico emerged from this power struggle, resulting in
      turbulence and tragedy. Societies were shattered and much of the
      indigenous population was shattered and much of the indigenous population
      died. People had lived here for thousands of years, in large communities
      and cultures. Wars and struggles had taken place between them, cultures
      had influenced each other. The original religions were suppressed by the
      Spanish, but could not be eradicated. The traditions proved resilient.
      They continued to change and mix with the Spanish ones. And the change
      continues.
    </span>,
  ],
  labelTexts: [],
};

const danceMasks: Post = {
  slug: 'dance-masks',
  heading: <span>Dance masks</span>,
  body: [
    <span key="0">
      Danza de la Pluma, the feather dance, is a spectacle originating in the
      state of Oaxaca in Mexico. The dance is performed during various
      celebrations and tells the story of the Spanish conquest. The tradition is
      different in different places in Oaxaca, but the main characters are
      always the Spanish conqueror Hernán Cortés and the last Aztec ruler
      Moctezuma II. La Malinche, Cortés' interpreter, also plays an important
      role.
    </span>,
    <span key="1">
      The dance is important to many people belonging to the Zapotec indigenous
      community. It shows the resilience of the Zapotec people against attempts
      to eradicate their culture and can be seen as a way to strengthen the
      Zapotec identity. An inspiration to continue holding on to their origins.
    </span>,
    <span key="2">
      Today, Danza de la Pluma is not only important in Mexico, but also for
      Zapotec migrants and their children and grandchildren in the United
      States. Through several dance groups, the tradition of Danza de la Pluma
      is continued there, helping to strengthen the community and the sense of
      belonging to both Mexico and the United States.
    </span>,
  ],
  labelTexts: [],
};

export const colonization: Theme = {
  name: 'colonization',
  label: 'Kolonisering',
  labelTranslation: 'Colonization',
  content: [
    {
      timeline: [aClashOfWorlds, danceMasks],
      label: 'A CLASH BETWEEN WORLDS',
      introduction: {
        heading: <span>A CLASH BETWEEN WORLDS</span>,
        body: [
          <p className="paragraph" key="0">
            The artist Frida Kahlo often addressed death in her art. In this
            painting, we see a little girl with a skull mask. Many believe this
            was a self-portrait. The girl is holding a yellow marigold, like
            those laid on graves on the Day of the Dead. On the ground beside
            her, we see another mask, this one representing a tiger. Frida
            Kahlo’s life was fraught with accidents, illness and chronic pain.
            The masks in the painting can be seen as symbols of her fate.
          </p>,
          <p className="paragraph" key="1">
            People had lived here for thousands of years, in large societies and
            cultures. Wars and struggles had taken place between them, and the
            cultures influenced one another. The indigenous religions were
            suppressed by the Spaniards but could not be wiped out completely.
            The traditions proved resilient. They continued to change and mix
            with the Spanish. And are still changing.
          </p>,
        ],
      },
      labels: [],
      objectTexts: [],
    },
  ],
};
