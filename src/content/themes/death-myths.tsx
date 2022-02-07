import { Post, Theme } from '../../types';

const theMictlanRealm: Post = {
  slug: 'the-mictlan-realm',
  heading: <span>The Mictlan realm of the dead and the underworld </span>,
  body: [
    <span key="0">
      The way someone died determined which realm of the dead they ended up in.
      Warriors who died in battle or women who died in childbirth were
      considered to have died a noble death and they went to one of the highest
      realms. Those who died of natural causes and old age were transferred to
      the underworld and the Mictlan realm of the dead
    </span>,
    <span key="1">
      Mictlan was ruled by Mictlantecuhtli, the god of death. He was considered
      to be the most powerful death deity and originally came from Toltec
      mythology. The goddess of death, Mictlancihuatl, also ruled here. Even
      today, she is considered to be responsible for memorial ceremonies for the
      dead, including the celebration of <i>Día de Muertos</i>.
    </span>,
    <span key="2">
      The journey to the Mictlan realm of the dead was difficult and filled with
      hardships. The dead were guided on their journey by the hairless dog Xolo.
      During the four-day journey through the underworld, the dead were
      threatened by both monsters and difficult terrain. The final obstacle was
      a deep river that the dog carried the dead person over before they finally
      arrived.
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
      The Spaniards exaggerated how many people the Aztecs sacrificed. They
      wrote in their propaganda that thousands of people were sacrificed, but
      only a few hundred human skulls have been found. There is much to indicate
      that those killed were war prisoners from other societies.
    </span>,
  ],
  labelTexts: [],
};

export const deathMyths: Theme = {
  name: 'death-myths',
  label: 'Dödsmyter',
  labelTranslation: 'Myths of death',
  content: [
    {
      label: 'MYTHS BETWEEN LIFE AND DEATH',
      introduction: {
        heading: <span>DEATH – A PREREQUISITE FOR LIFE</span>,
        body: [
          <span key="0">
            Aztec art often depicted faces with one half of the face living and
            the other half a skull. This shows that life and death are connected
            and neither of them can exist without the other. The notion of
            duality existed throughout Mesoamerica and was a cornerstone of
            religious thought. Other important opposites were day and night, and
            heat and cold.
          </span>,
          <span key="1">
            Skulls and skeletons are important symbols. For the Aztecs, they
            represented important and beloved ancestors. Although the Aztecs
            respected death, they were not afraid of the dead. Dead relatives
            continued to play an important role in the lives of the living. The
            Aztecs had many myths about what happened after death and there were
            different realms of the dead.
          </span>,
        ],
      },
      timeline: [rebirthAndSacrifice, theMictlanRealm],
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
