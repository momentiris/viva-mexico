import { Post, Theme } from '../../types';

const theConquest: Post = {
  slug: 'the-conquest',
  heading: <span>The Conquest</span>,
  body: [
    <span key="0">
      When the Spanish conqueror Hernán Cortés arrived in the Yucatan Peninsula,
      in present-day Mexico, in 1519, a powerful empire was already in place.
      Over nearly 200 years, the Aztec empire had developed into a superpower of
      sorts, with several million inhabitants. There were other communities as
      well, and the Aztecs collected taxes from them and took people as
      prisoners. It took two years, and one of the deadliest conflicts of all
      time, for the Spaniards to seize power and finally declare the colony of
      Mexico in 1521. It was not a struggle between two peoples, but a long
      process of both violence and multi-party negotiation. Cortés depended on
      the support of the subjugated groups, long oppressed by the Aztecs. When
      the last Aztec leader Moctezuma was killed, the battle was still not won.
      The Spaniards' eventual rise to power was largely due to the deadly
      diseases they brought with them. These wiped out the Aztec resistance and
      killed a majority of the indigenous population.
    </span>,
  ],
  labelTexts: [],
};

const laMalincheTheSlaveGirlWhoBecameADiplomat: Post = {
  slug: 'la-malinche-the-slave-girl-who-became-a-diplomat',
  heading: <span>La Malinche – the slave girl who became a diplomat</span>,
  body: [
    <span key="0">
      Malinche, or Malinalli as she was probably called, was sold as a slave
      when she was a little girl. In 1519, she was given as a gift to the
      Spanish, who had just arrived in what we now call Mexico. Since she spoke
      several languages, she became their interpreter. The conqueror Hernán
      Cortés needed the support of different ethnic groups to overthrow the
      ruling Aztecs. He is said to have promised Malinche "more than freedom" if
      she helped him, and she quickly proved to be a sharp diplomat. When she
      discovered the Aztecs' plan to defeat the Spaniards, she acted quickly.
      The Spaniards got away and it was the beginning of the end for the Aztec
      Empire. Malinche and Cortés worked together for a long time and even had a
      child together.
    </span>,
    <span key="1">
      La Malinche can be seen as a traitor, hence the term Malinchismo, which
      refers to someone who prefers the foreign to the Mexican. But la Malinche
      has also been portrayed as an intelligent individual at the center of a
      crucial historical event. Whatever your opinion, she is one of the most
      important women in Mexican history. La Malinche is portrayed in several
      dances, including the Danza de la Pluma and the Danza de Malinche.
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

const newSpainNewBorders: Post = {
  slug: 'new-spain-new-borders',
  heading: <span>New Spain, new borders</span>,
  body: [
    <span key="0">
      Spain's colonization included not only Mexico and Central America, but
      also parts of what is now the United States. Eight states, including
      California, New Mexico and Arizona, were part of what became known as New
      Spain. It was ruled for almost 300 years by a Spanish viceroy based in
      Mexico City. Later, during the Mexican-American War (1846-1848), these
      states were lost to the United States. Mexico then lost more than half of
      its territory. The Rio Grande River marked the new border, which still
      exists today between Texas and Mexico. Over the years, the border between
      Mexico and the United States has become increasingly sharp. Many people
      try to escape from Mexico to the United States every day. This flight is
      very dangerous and, in the worst case, can lead to death.
    </span>,
  ],
  labelTexts: [
    <span key="0">
      Shawl belonging to a woman of the Navajo indigenous people. The Navajo
      have roots in the southwestern US – an area that belonged to Mexico for a
      long period. 1949.15.0032
    </span>,
    <span key="1">
      Blanket for chief from 1880 belonging to the Navajo indigenous people.
      This type of blanket, with vertical stripes, was originally woven as a
      man’s garment and was used for trade with other ethnic groups.
      1949.15.0033
    </span>,
    <span key="2">
      Objects found at the Mexican border. They belong to the work Hardship and
      hope: Crossing the U.S. Mexico Border and are shown in their entirety in
      the Crossroads exhibition. Artists/Archivists: Valarie James & Antonia
      Gallegos, 2010
    </span>,
  ],
};

const secondPhaseChiefBlanket: Post = {
  slug: 'second-phase-chief-blanket',
  heading: <span>Second phase chief blanket</span>,
  body: [
    <span key="0">
      So-called 'Second phase chief blanket', woven for chiefs and other persons
      of high status, from the mid-19th century by the indigenous Diné (Navajo)
      people. Their roots are in the southwestern United States - an area that
      was part of Mexico for a long time. Chief blankets were important trade
      goods and status symbols in the 19th century.
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
      timeline: [
        theConquest,
        laMalincheTheSlaveGirlWhoBecameADiplomat,
        danceMasks,
        newSpainNewBorders,
        secondPhaseChiefBlanket,
      ],
      label: 'A clash of worlds',
      introduction: {
        heading: <span>A clash of worlds</span>,
        body: [
          <p className="paragraph" key="0">
            To colonize means to take control of an area. Spain's colonization
            of the Americas was a turbulent and violent history, with enormous
            consequences. The country of Mexico emerged from this power
            struggle, resulting in turbulence and tragedy. Societies were
            shattered and much of the indigenous population died. People had
            lived here for thousands of years, in large communities and
            cultures. Wars and struggles had taken place between them, cultures
            had influenced each other. The original religions were suppressed by
            the Spanish, but could not be eradicated. The traditions proved
            resilient. They continued to change and mix with the Spanish ones.
            And the change continues.
          </p>,
        ],
      },
      labels: [],
      objectTexts: [
        {
          slug: 'penacho',
          heading: <span>Penacho</span>,
          body: [
            <span key="0">
              Headdress made in Oaxaca, Mexico, made from up to 4000 colored
              turkey feathers. The headdress has been used in Danza de la Pluma
              by the dance company Ballet Folklórico Nueva Antequera in Los
              Angeles. Collected in 2023.
            </span>,
          ],
        },
      ],
    },
  ],
};
