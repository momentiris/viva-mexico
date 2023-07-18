import { Post, Theme } from '../../types';

const zapotecDanceOfTheFeatherAboutTheSpanishConquest: Post = {
  slug: 'zapotec-dance-of-the-feather-about-the-spanish-conquest',
  heading: (
    <span>Zapotec Dance of the Feather – about the Spanish conquest</span>
  ),
  body: [
    <span key="0">
      <i>Danza de la Pluma</i> , the Dance of the Feather, is a play performed
      in May every year telling the story of the Spanish conquest. The tradition
      is different in different places in Mexico, but the main characters are
      always the Spanish conquistador Hernán Cortés and the Aztecs’ last ruler,
      Moctezuma II. La Malinche, Cortés’s interpreter, also has an important
      role.
    </span>,
    <span key="1">
      The dance is important for many of the Zapotec indigenous people. It shows
      the resilience and perseverance of the Zapotec against the attempt to
      erase their culture. Some of the dance performances show the time before
      the Spanish conquest as an ideal. The dance can therefore be seen as a way
      to try to strengthen the Zapotec identity. And an inspiration to keep
      holding on to one’s origins.
    </span>,
  ],
  labelTexts: [
    <span key="0">
      Headdress consisting of about 3000 dyed turkey feathers. It was used in
      the <i>Danza de la Pluma</i> dance in Oaxaca, southern Mexico. Acquired in
      1937. Object number: 1937.19.0139
    </span>,
  ],
};

const laVirgeGuadalupeTheFirstMexican: Post = {
  slug: 'la-virge-guadalupe-the-first-mexican',
  heading: (
    <span>
      <i>La Virgen Guadalupe</i> – the first Mexican?
    </span>
  ),
  body: [
    <span key="0">
      The Madonna image <i>La Virgen Guadalupe</i> is, for many people, a symbol
      of the birth of the nation of Mexico. The image is said to have originated
      from a revelation a man had in 1531 on a hill near Mexico City. The man
      was Juan Diego Cuauhtlatoatzin, a member of the indigenous Chichimeca
      culture and a devout Christian. He met a girl, a vision of the Virgin
      Mary, who spoke his language, Nahuatl. She asked him to build a church in
      her honor. Images of this dark-skinned young woman have been used to unite
      Mexico, because she represents both Christianity and origin. She is
      sometimes called the first Mexican.
    </span>,
    <span key="1">
      Every year in December, thousands of people make a pilgrimage to the
      Basilica of Guadalupe, which was built on Tepeyac Hill. It is one of the
      most-visited Catholic pilgrimage destinations in the world. Nobel Laureate
      Octavio Paz once wrote that “the Mexican people, after more than two
      centuries of experiments and defeats, have faith only in the Virgin of
      Guadalupe and the National Lottery.”
    </span>,
  ],
  labelTexts: [
    <span key="0">
      Painting depicting La Virgen Guadalupe. Belongs to the National Museums of
      World Culture collections. 20th century.
    </span>,
  ],
};

const danceMasks: Post = {
  slug: 'dance-masks',
  heading: <span>Dance Masks</span>,
  body: [
    <span key="0">
      Masks are an old and important tradition in Mexico. Masks had been made
      for thousands of years when the Spanish arrived. After the conquest, the
      Spanish used masks as a way to spread their religion, Catholicism. Later,
      the colonial authorities tried to ban masks and dances, without success.
      After Mexico's independence, mask making has continued to evolve and now
      displays a mix of Mexican history and elements of popular culture.
    </span>,
    <span key="1">
      Most of the masks here have been used in the Danza de los Santiagueros,
      the dance telling the story of the victory of the Spanish Catholics over
      the Moors in Spain in the 15th century. The main character is the apostle
      Santiago. In Mexico, the dance was introduced by the missionaries to
      arouse fear and respect and to show that Christianity always wins. Today,
      200 years later, the dance has taken on a new meaning. Now it mainly
      symbolizes the important cultivation of corn, and the fight against the
      heatwave in July and August. Festivities dedicated to Santiago are held on
      July 25 throughout Mexico.
    </span>,
  ],
  labelTexts: [
    <span key="0">
      The Museum of World Culture has a large collection of masks, many of which
      have been used in the <i>Danza de los Santiagueros</i>. The Spaniards are
      portrayed with red faces, while the Muslims have white faces and
      mustaches. Many of the masks come from Veracruz or Guerrero. Part of
      collection 1980.11.
    </span>,
  ],
};

export const colonizationTwo: Theme = {
  name: 'colonization-2',
  label: 'Kolonisering',
  labelTranslation: 'Colonization 2',
  content: [
    {
      label: 'Dance masks',
      introduction: {
        heading: <span>Dance masks</span>,
        body: [
          <p className="paragraph" key="0">
            Masks are an old and important tradition in Mexico. Masks had been
            made for thousands of years when the Spanish arrived. After the
            conquest, the Spanish used masks as a way to spread their religion,
            Catholicism. Later, the colonial authorities tried to ban masks and
            dances, without success. After Mexico's independence, mask making
            has continued to evolve and now displays a mix of Mexican history
            and elements of popular culture.
          </p>,
          <p className="paragraph" key="1">
            Most of the masks here have been used in the Danza de los
            Santiagueros, the dance telling the story of the victory of the
            Spanish Catholics over the Moors in Spain in the 15th century. The
            main character is the apostle Santiago. In Mexico, the dance was
            introduced by the missionaries to arouse fear and respect and to
            show that Christianity always wins. Today, 200 years later, the
            dance has taken on a new meaning. Now it mainly symbolizes the
            important cultivation of corn, and the fight against the heatwave in
            July and August. Festivities dedicated to Santiago are held on July
            25 throughout Mexico.
          </p>,
        ],
      },
      timeline: [],
      labels: [],
      objectTexts: [],
    },
    {
      label: 'La Virgen de Guadalupe',
      introduction: {
        heading: <span>La Virgen de Guadalupe - the first Mexican?</span>,
        body: [
          <p className="paragraph" key="0">
            The image of La Virgen de Guadalupe is for many people a symbol of
            the birth of the country of Mexico with the Spanish colonization.
            Her image is said to originate from an apparition that a man had in
            1531 on a hill near Mexico City. The man was Juan Diego
            Cuauhtlatoatzin, a member of the Chichimeca indigenous culture and a
            devout Christian. He met a girl, an apparition of the Virgin Mary,
            who spoke his language, nahuatl. She asked him to build a church in
            her honor. Images of this dark-skinned virgin have been used to
            unify Mexico, as she represents both Christianity and origin. She is
            sometimes called the first Mexican.
          </p>,
          <p className="paragraph" key="1">
            Every December, thousands of people make a pilgrimage to the Church
            of Guadalupe, built on the Tepeyac hill. It is one of the most
            visited Catholic pilgrimage sites in the world. Nobel Prize winner
            Octavio Paz once wrote that when Mexicans have lost faith in almost
            everything, all that remains is faith in the National Lottery and in
            Our Lady of Guadalupe.
          </p>,
        ],
      },
      timeline: [],
      labels: [],
      objectTexts: [],
    },
  ],
};
