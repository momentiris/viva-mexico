/* eslint-disable react/no-unescaped-entities */

import { Post, Theme } from '../../types';

const olmec: Post = {
  slug: 'olmec',
  heading: <span>Olmec (about 2000 to 500 years BCE)</span>,
  body: [
    <span key="0">
      The Olmec culture was one of the first to emerge in Mesoamerica. We don’t
      know much about the Olmecs because very little has been documented from
      this time. The name <i>Olmec</i> was coined by 20th century
      archaeologists. It seems that the Olmecs had a strong influence on later
      cultures in the area, for example through their gods and their
      architecture. The Olmecs are therefore often called Mesoamerica’s mother
      culture. In 2006, researchers discovered an Olmec script suggesting that
      the Olmec may have been the first civilization in the Western Hemisphere
      to develop a writing system.
    </span>,
  ],
  labelTexts: [],
  objectTexts: [],
};

const zapotec: Post = {
  slug: 'zapotec',
  heading: <span>Zapotec (ca. 2000 before common era (BCE) to today)</span>,
  body: [
    <span key="0">
      Many years ago, the Zapotec civilization developed advanced building
      technology, a written language, and a calendar system. The most important
      city was the religious center Mitla, in the modern-day state of Oaxaca.
      The name Mitla most likely comes from the word in the Nahuatl language for
      the underworld and the world of the dead, Mictlán. The site was
      constructed as a gate between the world of the dead and the world of the
      living. It shows a view of death shared by the Mesoamerican cultures –
      that it is closely linked to life. The Zapotec language is spoken today by
      about half a million people. They do not usually call themselves and their
      ancestors Zapotecs, but instead sometimes use the name Ben’Zaa, which
      means "The Cloud People".
    </span>,
  ],
  labelTexts: [],
  objectTexts: [],
};

const maya: Post = {
  slug: 'maya',
  heading: <span>Maya (ca. 1000 BCE to today)</span>,
  body: [
    <span key="0">
      The Mayan culture spread out over a huge area covering what is today
      Mexico, Guatemala, Honduras, Belize and El Salvador. What we refer to as
      the Mayan civilization included a number of different groups with similar
      cultures and religions and who spoke one of the various Mayan languages.
      The last Mayan kingdom fell to the Spaniards in 1697. Most of the Maya in
      Mexico today live on the Yucatán Peninsula and in Chiapas. In Guatemala,
      they comprise about 60 percent of the population.
    </span>,
  ],
  labelTexts: [],
  objectTexts: [],
};

const teotihuacan: Post = {
  slug: 'teotihuacan',
  heading: (
    <span>Teotihuacán – City of the Gods (ca. 600 BCE to ca. 700 CE)</span>
  ),
  body: [
    <span key="0">
      Teotihuacán is the largest known city in Mexico from the time before
      Spanish conquest. It was founded when the Maya culture was at its peak and
      was later populated by other cultures, such as the Zapotec. In the 6th
      century, it was one of the world’s largest cities, with a population of
      about 150,000. The city had large pyramids and palaces. Among these is the
      Pyramid of the Sun, which is the third-largest pyramid in the world. The
      city was an economic, political and religious center that had great
      influence throughout Mesoamerica. The population of Teotihuacán dropped
      drastically during the 8th century and the city was eventually completely
      dismantled.
    </span>,
  ],
  labelTexts: [],
  objectTexts: [],
};

const toltec: Post = {
  slug: 'toltec',
  heading: <span>Toltec (ca. 800 to 1200 CE)</span>,
  body: [
    <span key="0">
      The Toltecs migrated from the northwest into the central parts of Mexico
      in the 9th century. The Toltecs consisted of several different groups. Up
      to 40,000 people lived in the capital city of <i>Tula</i> in central
      Mexico. Trade was conducted here in precious stones such as turquoise and
      jade, as well as obsidian, which is a volcanic glass. There were
      ballcourts, palaces and pyramids in the city. The dead were buried in
      cavities under the buildings. The Aztecs, who later took over the area,
      were likely related to the Toltecs and were inspired by their religion.
      According to Aztec myths, the god Quetzalcoatl was the son of the first
      Toltec leader.
    </span>,
  ],
  labelTexts: [],
  objectTexts: [],
};

const theAztecEmpire: Post = {
  slug: 'the-aztec-empire',
  heading: <span>The Aztec Empire (ca. 1300–1521 CE)</span>,
  body: [
    <span key="0">
      The Aztec Empire was powerful and rich. As the empire grew, it came to
      include many different cultures and languages. The dominant people called
      themselves <i>Mexica</i> or <i>Culhua-Mexica</i>. It was the Europeans who
      began calling them Aztecs. The empire was at its greatest, with five
      million inhabitants, when the Spaniards arrived in 1519. Nearly 250,000
      people lived in the capital city of Tenochtitlán, in what is now Mexico
      City. Many people were farmers or artisans, or part of the military or
      nobility. A large portion of the population were also slaves taken as
      prisoners from other ethnic groups. The Aztecs were often at war with
      other groups, and they had many enemies.
    </span>,
  ],
  labelTexts: [],
  objectTexts: [],
};

export const origin: Theme = {
  name: 'origin',
  label: 'Ursprung',
  labelTranslation: 'Origin',
  content: [
    {
      label: 'What existed before Mexico?',
      introduction: {
        heading: <span>What existed before Mexico?</span>,
        body: [
          <span key="0">
            Mesoamerica is the name of the large area that covered Mexico and
            large portions of Central America before the current countries
            existed. Many powerful cultures flourished here. The first people
            arrived here 17,000 years ago. About 4,000 years ago, they began
            farming and gradually built larger communities and cities. Our names
            for the biggest and most important civilizations that existed here
            are the Olmec, Maya, Zapotec, Toltec and Aztec. The cultures had a
            lot in common. Among other things, they had advanced forms of
            agriculture, irrigation, architecture and calendars. In their world
            views and religions were similar ideas about gods, myths, and over-
            and underworlds.
          </span>,
        ],
      },
      timeline: [olmec, zapotec, maya, teotihuacan, toltec, theAztecEmpire],
      labels: [
        'Mask with skulls from Teotihuacá. Time period: 200–650 CE Object number: 1935.08.2774',
        'Mask, probably Olmec. Veracruz. Time period: 1500–400 BCE Object number: 1996.29.0021',
        'Olmec seated figure from Veracruz. Time period: 1200–600 BCE Object number: 1974.18.0001',
        'Mayan figure of woman. (Jaina, Campeche). Time period: 600–800 CE Object number: 1956.36.0001',
        'Mayan figure of woman. Time period: 600–900 CE Object number: 1923.06.0589',
        'Warrior with rabbit head from Veracruz area. Warriors often wore headdresses with animal motifs. Object number: 1923.06.0496',
        'Toltec ceramic fragment with face and bird. A typical Toltec motif. Object number: 1962.69.0010',
        'Zapotec funerary urn from Oaxaca. Time period ca. 600–900 CE Object number: 1923.06.0301',
        'Zapotec urn from Oaxaca. The jaguar has an important role in Mesoamerican myths. Time period ca. 600–900 CE Object number: 1923.06.0306',
        'Pumpkin-shaped vessel with bird legs from Colima. Belonged to the Purépecha people. Time period: ca. 300 BCE–200 CE Object number: 1923.06.0557',
        'Aztec idol of the corn goddess Chicomecóatl. Mexico City. Corn is important in Mesoamerican history. Time period: 1350–1521 CE Object number: 1928.19.0134',
        'Aztec three-legged vessel. Probably a type of spice mortar (molcajete). Time period: 1250–1521 CE Object number: 1962.69.0002',
      ],
      inDepthTexts: [],
    },
  ],
  inDepthTexts: [],
  objectTexts: [],
};
