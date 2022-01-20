import { Post, Theme } from '../../types';

const theOfrendaTheAltar: Post = {
  slug: 'the-ofrenda-the-altar',
  heading: (
    <span>
      The <i>ofrenda</i> - the altar
    </span>
  ),
  body: [
    <span key="0">
      Central to the <i>Día de Muertos</i> celebrations is the altar,{' '}
      <i>la ofrenda</i>, which is set up in the home to welcome back the dead.
      The altar is often dedicated to a special person. The altar is filled with
      flowers, food, beverages, photographs and fruit – everything that the dead
      liked in life. The first to return from the world of the dead are usually
      the children (<i>los angelitos</i>). Tables filled with lots of candy and
      toys are created for them. The four elements – earth, air, fire and water
      – are included on the altar as important symbols. A glass of water, lit
      candles for fire, fruit symbolizing the earth, and paper figures
      representing the wind.
    </span>,
  ],
  labelTexts: [],
  objectTexts: [],
};

const calaverasSkulls: Post = {
  slug: 'calaveras–skulls',
  heading: <span>Calaveras – skulls</span>,
  body: [
    <span key="0">
      Skulls, or calaveras as they’re called in Spanish, play a major role on
      <i>Día de Muertos</i>. They are used as decorations everywhere, in various
      shapes and materials. The skulls represent ancestors and the close
      relationship between life and death. During the celebration, sugar
      <i>calaveras</i> are made to be given as candy to the children and to be
      placed on the alter. Decorating with skulls is an old tradition, with
      roots in cultures such as the Aztec and Toltec.
    </span>,
  ],
  labelTexts: [],
  objectTexts: [],
};

const copalIncenseTheFoodOfTheGods: Post = {
  slug: 'copal-incense-the-food-of-the-gods',
  heading: <span>Copal incense – the food of the gods</span>,
  body: [
    <span key="0">
      The burning of copal incense is an important part of the celebration. It
      is a tradition that goes back thousands of years, including to the
      cultures of the Aztecs and Maya. Copal was an essential gift that needed
      to be offered daily as food to the gods. In Mesoamerica, there were great
      similarities between the significance of corn and copal. Corn was the
      humans’ food and copal was the gods’ food – both equally important for the
      continuation of life.
    </span>,
  ],
  labelTexts: [],
  objectTexts: [],
};

export const diaDeMuertos: Theme = {
  name: 'dia-de-muertos',
  label: 'Día De Muertos',
  content: [
    {
      label: 'Day of the Dead – the most important festival?',
      introduction: {
        heading: <span>Day of the Dead – the most important festival?</span>,
        body: [
          <span key="0">
            <i>Día de Muertos</i>, the Day of the Dead, is a very big holiday in
            Mexico. It honors the memory of all of those who are no longer with
            us. The celebration is a mixture of ancient Mesoamerican harvest and
            sacrifice festivals and Catholic traditions introduced under Spanish
            rule. The celebrations are different in different parts of Mexico,
            but they all share a common view of life and death. The souls of the
            dead return during these days to the world of the living.{' '}
            <i>Día de Muertos</i> has become an important part of Mexico’s
            identity, particularly following independence. The tradition
            continues to grow and develop and has, for example, been influenced
            by the Halloween celebrations of the United States. The celebration
            has also become popular outside Mexico’s borders, such as here at
            the Museum of World Culture. First proclaimed in 2003,{' '}
            <i>Día de Muertos</i> joined the UNESCO Representative List of the
            Intangible Cultural Heritage of Humanity in 2008.
          </span>,
        ],
      },
      timeline: [
        theOfrendaTheAltar,
        calaverasSkulls,
        copalIncenseTheFoodOfTheGods,
      ],
      labels: [],
      inDepthTexts: [],
    },
  ],
  inDepthTexts: [],
  objectTexts: [
    {
      heading: <span>Flower of the Dead</span>,
      body: [
        <span key="0">
          The sweet aroma of the orange and yellow marigolds is said to tempt
          the dead to return to the world of the living. The flowers make it
          easier for the souls to find their way back on the night between the
          1st and 2nd of November. In Mexico, the flowers are often called{' '}
          <i>flor de muerto</i>, or “flower of the dead.” On the Day of the
          Dead, the flowers are used in abundance on streets and altars and in
          homes and cemeteries.
        </span>,
      ],
    },
    {
      heading: <span />,
      body: [
        <span key="0">
          <i>
            &quot;For me, the skulls and flowers are a symbol that life and
            death are connected and that something new always comes when
            something ends. They symbolize that you wish the person the best in
            life, but also a nice journey onward after death.&quot;
          </i>
          –Anabelí Brancusi, ceramicist and artist
        </span>,
      ],
    },
  ],
};
