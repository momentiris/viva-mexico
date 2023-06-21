import { Post, Theme } from '../../types';

const theUnderworld: Post = {
  slug: 'the-underworld',
  heading: <span>The underworld</span>,
  body: [
    <span key="0">
      According to the Aztecs, there were several realms of the dead. The way
      someone died determined where they ended up. Warriors who died in battle
      or women who died in childbirth were considered to have died a noble death
      and they went to one of the highest realms. Those who died of natural
      causes and old age were transferred to the underworld and the Mictlan
      realm of the dead.
    </span>,
    <span key="1">
      Mictlan was ruled by Mictlantecuhtli, the god of death. He was the most
      powerful death deity and originally came from Toltec mythology. The
      goddess of death, Mictlancihuatl, also ruled here. Even today, she is
      considered to be responsible for memorial ceremonies for the dead,
      including the celebration of <i>Día de Muertos.</i>
    </span>,
    <span key="2">
      The journey to the Mictlan realm of the dead took several years and was
      filled with hardships. The dead were guided on their journey by the
      hairless dog <i>Xoloitzcuintle</i>, called Xolo. During the journey
      through the underworld, the dead were threatened by both monsters and
      difficult terrain. One of the obstacles was a deep river that the dog
      carried the dead person over. arrived.
    </span>,
  ],
  labelTexts: [],
};

const rebirthAndSacrifice: Post = {
  slug: 'rebirth-and-sacrifice',
  heading: <span>Rebirth and sacrifice</span>,
  body: [
    <span key="0">
      To create new life, something had to be sacrificed. Though gifts, the
      people paid the gods back for the suffering they went through to create
      the universe. These sacrifices took place in both the temple and in the
      home. Valuable objects, animals, incense, flowers and food were common
      gifts. Prayers, songs and dance were also dedicated to the gods. People
      also gave their own blood, by cutting themselves, and sometimes people
      were even killed. It was believed that human sacrifices would prolong
      life.
    </span>,
    <span key="1">
      The Spaniards probably exaggerated how many people the Aztecs sacrificed.
      There is much to indicate that those killed were mainly war prisoners from
      other societies.
    </span>,
  ],
  labelTexts: [],
};

const theNewFireCeremony: Post = {
  slug: 'the-new-fire-ceremony',
  heading: <span>The new fire ceremony – Xiuhmolpilli</span>,
  body: [
    <span key="0">
      The Aztec way of counting time was based on two parallel calendars, one of
      365 days and one of 260 days. Once every 52 years, these two calendars
      matched up. This marked a new “century,” with big religious celebrations.
      The ceremony had great significance for the society and symbolized
      rebirth. People got rid of their possessions and idols. At the start of
      the festival, all fires in the city were extinguished. At midnight on the
      last day, when the fire star reached the zenith of the night sky, a
      prisoner was killed as a gift for rebirth. The priest then lit a new fire
      that would once again illuminate the city. When the fire was extinguished,
      the people could be sure that the sun would continue to rise over the next
      52 years. It was a time of rebirth. This ceremony was celebrated for the
      last time by the Aztecs in 1508.
    </span>,
  ],
  labelTexts: [
    <span key="0">
      Reproduction of the calendar stone or “Sun Stone.” In reality, the Sun
      Stone is 3.5 meters (11.4 ft) in diameter and weighs about 24 metric tons
      (26 US tons). The four eras, or suns, are depicted in the stone’s reliefs.
      Each sun is represented as a square shape surrounding the central figure
      of the sun god Tonatiuh. 1935.41.0016
    </span>,
    <span key="1">
      The water goddess Chalchiuhtlicue is one of the gods representing the four
      worlds. Time period: 1256–1521 Object number: 1923.06.0010
    </span>,
    <span key="2">The rain god Tlaloc. Object number: 1923.06.0011</span>,
    <span key="3">
      The goddess of flowers and fertility, Xochiquetzal. Clay idol. Time
      period: 1256–1521 Object number: 1923.06.0008
    </span>,
    <span key="4">
      Thuribles (incense burners) depicting the old fire god Huehuetéotl, who
      represents an important phase of the fire festival in the creation myth.
      Post-classical period 1256–1521 Object number: 1928.19.0131
    </span>,
    <span key="5">
      The war god Tezcatlipoca. Clay figure. Central Mexico. Time period:
      900–1200 Object number: 1923.06.0002
    </span>,
    <span key="6">
      Ehecatl-Quetzalcoatl. Statuette from Mexico City. Time period: 1256–1521
      Object number:1928.19.0133
    </span>,
    <span key="7">
      Ehecatl-Quetzalcoatl wind god. Plaster cast from post-classical period
      1256–1521 Object number: 1911.07.0002
    </span>,
  ],
};

const theSunStone: Post = {
  slug: 'the-sun-stone',
  heading: <span>The sun stone – The myth of the fifth sun</span>,
  body: [
    <span key="0">
      The Sun Stone (<i>Piedra del Sol</i>) is the Aztecs’ most famous work of
      art, often reproduced on posters and souvenirs. It was made over 500 years
      ago and tells the story of the four worlds that had existed before the
      then ongoing fifth world. The sun god <i>Tonatiuh</i>, in the center of
      the stone, is very important. He gave his life to become the sun and for
      humans to be created. The four earlier worlds each had their own god who
      ruled over them. These were <i>Chalchiuhtlicue</i>, the goddess of rivers
      and lakes, the wind god <i>Quetzalcoatl</i>, the fire god{' '}
      <i>Xiuhtecutli</i>, and the rain god <i>Tlaloc</i>. When their worlds
      collapsed, it was because of the dangerous sides of the four elements,
      such as floods, hurricanes, fires and drought.
    </span>,
    <span key="1">
      When the fifth and last world was to be created, the gods gathered in the
      city of Teotihuacán to decide who would sacrifice themselves. The old fire
      god <i>Huehuetéotl</i> lit a sacrificial bonfire. It was finally the poor
      and humble god <i>Nanahuatzin</i> who sacrificed himself and jumped into
      the fire. He became the new sun.
    </span>,
  ],
  labelTexts: [],
};

export const myths: Theme = {
  name: 'myths',
  label: 'Myter',
  labelTranslation: 'Myths',
  content: [
    {
      label: 'MYTHS BETWEEN LIFE AND DEATH - I',
      introduction: {
        heading: <span>HOW WAS THE WORLD CREATED?</span>,
        body: [
          <p className="paragraph" key="0">
            The Aztecs had a number of myths about how the world was created.
            They were inspired by creation myths from other Mesoamerican
            cultures. The Aztecs thought that the world had been created and
            destroyed in several cycles. According to the myths, the world was
            in its fifth cycle when the Spaniards came and conquered Mesoamerica
            in the 16th century.
          </p>,
          <p className="paragraph" key="1">
            Each world was controlled by different gods using the four elements:
            earth, water, wind or fire. The gods had the ability to both destroy
            and create a new world. Each world was called a sun, and for a new
            sun to be formed, at least one god must sacrifice him- or herself.
            The belief that something must be sacrificed for something new to be
            born is a cornerstone of Aztec faith.
          </p>,
        ],
      },
      timeline: [theSunStone, theNewFireCeremony],
      labels: [],
      objectTexts: [
        {
          slug: 'dance-of-the-flyers',
          heading: <span>Dance of the Flyers</span>,
          body: [
            <span key="0">
              <i>Danza de los Voladores</i>, or the Dance of the Flyers, is an
              old ceremony that is today mostly performed in the state of
              Veracruz. The original aim of the tradition was to ensure good
              harvests. The ritual consists of five dancers climbing up a
              30-meter (98.4-ft) pole, from which four of the dancers then hang
              and spin from ropes. In the beginning, the pole was a tree. The
              fifth person remains on top of the pole, playing a flute and
              drums. The dancers spin around the pole 13 times each, for a total
              of 52 times – an important number in Mesoamerican calendars. The
              dancers symbolize the four directions and the four elements:
              earth, air, fire and water. The person remaining on top of the
              pole represents the fifth sun. The ritual is recognized by UNESCO
              as an intangible cultural heritage, a tradition to be protected.
            </span>,
          ],
        },
      ],
    },
    {
      label: 'MYTHS BETWEEN LIFE AND DEATH - II',
      introduction: {
        heading: <span>Without death there is no life</span>,
        body: [
          <p className="paragraph" key="0">
            Aztec art often depicted faces with one half of the face living and
            the other half a skull. This shows that life and death are connected
            and neither of them can exist without the other. The notion of
            duality existed throughout Mesoamerica and was a cornerstone of
            religious thought. Other important opposites were day and night,
            heat and cold.
          </p>,
          <p className="paragraph" key="1">
            Skulls and skeletons are important symbols. For the Aztecs, they
            represented important and beloved ancestors. Although the Aztecs
            respected death, they were not afraid of the dead. Dead relatives
            continued to play an important role in the lives of the living. The
            Aztecs had many myths about what happened after death and there were
            different realms of the dead.
          </p>,
        ],
      },
      timeline: [rebirthAndSacrifice, theUnderworld],
      labels: [
        'A miniature of the sacrificial stone Piedra de Tizoc, which was found in Templo Mayor in Tenochtitlán. The heart of the victim was placed on this stone. The victim was usually a warrior from another ethnic group. A furrow runs from the center to the edge, where the blood of the victim’s heart would run out. The original stone is from the 15th century. Object number: 1936.06.0002',
        'Aztec sacrificial knife. Copy of object from the British Museum in London. The copy was purchased sometime around the turn of the last century. Object number: 1944.02.0034',
        'Reproduction of Aztec chest probably used to store the sacrificial victim’s heart. On the top is the feathered serpent Quetzalcoatl and the sign for “the soul of the dead warrior.” On the bottom is the earth goddess Tlaltecuhtli.',
        'Illustration depicting the earth goddess Tlaltecuhtli. The motif is on the bottom of the Aztec stone vessel shown in reproduction here. The original is at the Museum fur Völkerkunde in Hamburg. All of the dead must pass through the body of the earth goddess to get to the realm of death. Her name means “the one who gives and devours life."',
        'Plaster cast from the original in the Museum fur Völkerkunde in Hamburg. Object number: 1939.32.0001',
        'Shard with two skulls. From the state of Veracruz. Belongs to the Museum of Ethnography. Object number: 1923.08.0684',
        'Aztec incense burner with skulls, 18 cm (7.1 in). Mexico City. Time period: 1256–1521 Object number: 1923.06.431',
        'Mictlantecuhtli and Quetzalcoatl – the god of death and the god of wind. Illustration from Codex Borgia, a 16th- century Mesoamerican manuscript.',
        'Xolo dog from the Tumbas de Tiro culture. Time period: 200–900 CE Object number: 1923.06.0545',
        'Xolo dog from Colima. Time period: 200–900 CE Object number: 1962.73.19',
      ],

      objectTexts: [],
    },
  ],
};
