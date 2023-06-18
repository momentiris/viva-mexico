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

export const mictlan: Theme = {
  name: 'mictlan',
  label: 'Mictlán',
  labelTranslation: 'Journey to Mictlán',
  content: [
    {
      label: 'Journey to Mictlán',
      introduction: {
        heading: <span>Journey to Mictlán</span>,
        body: [
          <p className="paragraph" key="0">
            The Mexican artists' collective DÄ has chosen to take as its
            starting point from the original beliefs and stories of life and
            death that existed before the Spanish colonization. In their art,
            they highlight some of the central symbols, deities and gods, and
            especially the unique approach to death. Mictlán is one of the many
            realms of death they tell us about, and where most of the dead go.
            By highlighting the theme, the artists want to preserve and respect
            their respect their cultural heritage. "We want to tell the story of
            a more just, global and inclusive world that allows for human
            diversity. This has been denied all the original peoples of the
            Americas. We share the struggle for life and liberty. They never
            conquered us, our traditions live and permeate our way of looking at
            life and death."
          </p>,
        ],
      },
      timeline: [],
      labels: [],
      objectTexts: [
        {
          slug: 'sjalens-raddning',
          heading: <span>Själens räddning</span>,
          body: [
            <span key="0">
              Itzcuintlan är platsen där de dödas själar korsar floden
              Apanohuacalhuia. Hunden Xolo, Xoloitzcuintle, hjälper den döde
              över till dödsriket Mictlán.
            </span>,
          ],
        },
        {
          slug: 'xolotl-solen-och-manniskans-vagvisare',
          heading: (
            <span>Xolotl – solen och människans vägvisare (XOLO mask) </span>
          ),
          body: [
            <span key="0">
              En gud som visar sig i skepnad av en hund. Xolotl vägleder
              människor på deras väg i dödsriket. Den vägleder också solen när
              den går ner i havet och på dess väg genom underjorden innan den på
              nytt går upp. Hunden Dante i filmen Coco är inspirerad av guden
              Xolotl.
            </span>,
            <h2>De dödas ben är frön</h2>,
            <span key="1">
              Enligt många ursprungsbefolkningar än idag krävs ett symboliskt
              samarbete mellan levande och döda för att majsen ska växa.
              <i>Dräkten är skapad med majsblad av Roberto Jiménez.</i>
            </span>,
          ],
        },
        {
          slug: 'xipe-totec-gud-over-krig-och-odling',
          heading: <span>Xipe Tòtec – gud över krig och odling</span>,
          body: [
            <span key="0">
              Xipe Tòtec ä ren skrämmande och kraftfull gud, med makt över både
              krig och majsodling. Han kallas även Tezcatlipoca. Majsen var
              människans viktigaste föda och odlingens cykler var tätt
              sammankopplade med människans liv och död.
            </span>,
          ],
        },
        {
          slug: 'vagen-till-tomheten',
          heading: <span>Vägen till tomheten</span>,
          body: [
            <span key="0">
              Att dö var inte slutdestinationen. De döda behövde klara nio
              nivåer av prövningar för att nå Mictlán. De måste släppa allt som
              bundit dem till livet.
            </span>,
          ],
        },
        {
          slug: 'mictlantecuhtli-underjordens-herre',
          heading: <span>Mictlantecuhtli – underjordens herre</span>,
          body: [
            <span key="0">
              Mictlantecuhtli tog hand om dem som dött en naturlig död och
              färdats till dödsriket Mictlán. Här fortsatte människornas själar
              att finnas. På samma sätt som ljuset inte kan synas utan mörker,
              kan livet inte existera utan döden.
            </span>,
          ],
        },
        {
          slug: 'platsen-som-livet-inte-kanner-till',
          heading: <span>Platsen som livet inte känner till</span>,
          body: [
            <span key="0">
              I underjorden välkomnar dödsguden Mictlantecuhtli dem som dött en
              naturlig död.
            </span>,
          ],
        },
      ],
    },
  ],
};
