import { Post, Theme } from '../../types';

const theRevolutionAndTheSearchForCulturalGoods: Post = {
  slug: 'the-revolution-and-the-search-for-cultural-goods',
  heading: <span>The revolution and the search for cultural roots</span>,
  body: [
    <span key="0">
      During the 19th century, Mexico made great technological and economic
      advances. But the improvements only reached the middle and upper classes.
      Many people were unhappy, and this eventually led to rebellion. The
      revolution of the 1910s claimed many lives, maybe as many as one million
      people.
    </span>,
    <span key="1">
      It was now important for Mexico to seek its cultural roots. The interest
      in archeology and native traditions grew. But so did awareness of the
      injustices suffered by the indigenous people. Many artists, such as Frida
      Kahlo and Diego Rivera, depicted this in their art.
    </span>,
    <span key="2">
      The satirist José Guadalupe Posada captured these problems in his drawings
      even before the revolution. Among other things, by creating the character
      La Calavera Catrina, an upper-class woman who put her bony finger on the
      social injustices in Mexico.
    </span>,
  ],
  labelTexts: [
    <span key="0">
      Huipiles, embroidered sleeveless cotton blouses. 1980.11.0020 and
      1980.11.0021
    </span>,
  ],
};

const tehuanaWomensParadesAndFestivals: Post = {
  slug: 'tehuana-womens-parades-and-festivals',
  heading: <span>TEHUANA WOMEN’S PARADES AND FESTIVALS</span>,
  body: [
    <span key="0">
      The women from Tehuantepec in Oaxaca are known for their annual{' '}
      <i>Velas</i>
      festivals. The women walk in processions through the streets, dressed in
      traditional costumes and gold jewelry. One of the garments worn is the
      hand-embroidered huipil blouse. The festivals are usually held during the
      summer and every festival is dedicated to a patron saint. In addition to
      dances and processions, a queen is crowned with flowers and people light
      candles as sacrificial gifts to the local patron saint. The women are
      often of Zapotec origin and choose to speak the Zapotec language over
      Spanish. <i>Tehuanas</i>, as the women are called, became after
      independence an important symbol of national identity and have a strong
      cultural influence in Mexico.
    </span>,
    <span key="1">
      The Tehuana women have received a lot of attention for their strong
      position in the community. In a society that has struggled with gender
      inequality, Tehuantepec has been portrayed as a matriarchy and a sanctuary
      for women and transgender people.
    </span>,
  ],
  labelTexts: [
    <span key="0">
      Huipiles, embroidered sleeveless cotton blouses. 1980.11.0020 and
      1980.11.0021
    </span>,
  ],
};

const independenceDayCelebrations: Post = {
  slug: 'independence-day-celebrations',
  heading: <span>Independence Day Celebrations</span>,
  body: [
    <span key="0">
      Mexico’s Independence Day is celebrated in memory of the uprising of 1810,
      when the priest Miguel Hidalgo, hailed as the Father of the Nation,
      encouraged the people to revolt against Spanish rule. In a speech, he was
      said to have proclaimed: “ ¡Viva México! ¡Viva la Independencia!” (Long
      live Mexico! Long live independence!)
    </span>,
    <span key="1">
      Independence Day on September 16th is a big event celebrated throughout
      the country in both large cities and small villages. A traditional
      ceremony is often held in which the mayor exclaims the same words that
      Hidalgo did in 1810. After the speech, the entire audience shouts ¡Viva
      México! – “long live Mexico!” Independence Day has come to symbolize
      liberation from Spanish oppression.
    </span>,
  ],
  labelTexts: [
    <span key="0">
      The sarape is a garment traditionally worn and used by the Mexican working
      class. It has become a symbol of the Mexican struggle for freedom and
      democracy. This sarape is from the 1900s. Object number: 1966.02.0003
    </span>,
  ],
};

export const independence: Theme = {
  name: 'independence',
  label: 'Självständighet',
  labelTranslation: 'Indepencence',
  content: [
    {
      label: 'independence',
      introduction: {
        heading: <span>¡VIVA MÉXICO! – TOWARD INDEPENDENCE</span>,
        body: [
          <span key="0">
            In the early 1800s, ideas about equality and freedom were spreading
            throughout the world. Many countries in North, Central and South
            America wanted to free themselves from colonial rule, and the fact
            that Europe had the power. Large parts of America became more or
            less independent.
          </span>,
          <span key="1">
            The Mexican War of Independence was started in 1810 by the priest
            Miguel Hidalgo y Costilla. And after many years of fighting, Mexico
            finally won its independence in 1821, 300 years after Spanish
            conquest. But the War of Independence meant great losses. Many
            people died and the country was weakened. It was perhaps because of
            these defeats that indigenous cultures and traditions became so
            important for Mexico during this period. People had lived here after
            all for thousands of years, in large societies and cultures, before
            the Spanish came. This cultural heritage played a major role in
            Mexico’s new, independent identity.
          </span>,
        ],
      },
      objectTexts: [
        {
          slug: 'frida-kahlo-in-tehuana-dress',
          heading: <span>Frida Kahlo in Tehuana dress</span>,
          body: [
            <span key="0">
              The artist Frida Kahlo helped to call attention to Tehuantepec, as
              she often wore the traditional dress of Tehuana women: huipil
              blouses, dresses and flowers in her hair. She often used fashion
              and clothing to express her political and cultural identity. Frida
              Kahlo’s mother was from Tehuantepec.
            </span>,
          ],
        },
      ],
      timeline: [
        independenceDayCelebrations,
        tehuanaWomensParadesAndFestivals,
        theRevolutionAndTheSearchForCulturalGoods,
      ],
      labels: [],
    },
  ],
};
