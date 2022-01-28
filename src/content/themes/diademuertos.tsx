import { Post, Theme } from '../../types';

const traditionsInPaper: Post = {
  slug: 'traditions-in-paper',
  heading: <span>Traditions in Paper</span>,
  body: [
    <span key="0">
      <i>Papel picado</i> is figure-cut tissue paper used on holidays and other
      festive occasions. On <i>Día de Muertos</i>, it symbolizes the wind. Long
      banners with paper decorations are used on nearly all major holidays. For
      example, on the Feast of Our Lady of Guadalupe and on Independence Day.
      The pattern and message on the paper vary depending on the holiday.
    </span>,
    <span key="1">
      There is a long tradition of paper-making in Mexico. Paper was originally
      made of bark from fig and other trees. The bark paper is called
      <i>amate/amatl</i> and was especially used during religious ceremonies.
      Often, it was ritual specialists who cut out the images according to how
      the paper would be used. Amate paper was banned by the Spaniards due to
      its religious significance. This was part of the attempt to introduce
      Christianity. Writings containing details about history, traditions and
      science were burned up forever and very few were preserved. Information on
      history, traditions and science disappeared forever.
    </span>,
  ],
  labelTexts: [],
};

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
        traditionsInPaper,
        theOfrendaTheAltar,
        calaverasSkulls,
        copalIncenseTheFoodOfTheGods,
      ],
      labels: [
        'Ofrenda/altar in paper. Object number: 2003.15.0019',
        'Larger sugar skull MWC Object number: 1972.17.0005',
        'Skull figures/calaveras used as altar decoration during the Day of the Dead. From the 1930s. Object numbers: 1935.47.0286, 1963.27.0050, 1935.47.0296, 1963.27.0055 and 1963.27.0048',
        'Three-legged clay vessel. Clay vessels like this were used for incense and fire offerings. From Colima. Object number: 1923.06.0562.',
        'Copal. Object number: 1962.36.0039  ',
        'Silhouette figures in amate paper from the Otomi ethnic group. The paper was made from the bark of fig trees and then cut into silhouette figures or dolls. They were used in sacred rites. Common motifs are animals, gods, the devil and demons. 1968.16.0102, 1968.16.0057, 1968.16.0059, 1968.16.0060, 1968.16.0061, 1968.16.0062, 1968.16.0063, 1968.16.0064, 1968.16.0066 and 1945.11.0001',
        'Silhouette figures in tissue paper from the Otomi ethnic group. They have been used in sacred rites. 1968.16.0101, 1968.16.0102,1968.16.0103, 1968.16.0104, 1968.16.0105, 1968.16.0110, 1968.16.0095 and 1968.16.0098',
      ],
      inDepthTexts: [],
    },
  ],
  inDepthTexts: [],
  objectTexts: [
    {
      slug: 'flower-of-the-dead',
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
      slug: 'quote-anabeli-brancusi',
      heading: <span />,
      body: [
        <span key="0">
          <blockquote>
            For me, the skulls and flowers are a symbol that life and death are
            connected and that something new always comes when something ends.
            They symbolize that you wish the person the best in life, but also a
            nice journey onward after death.
          </blockquote>
          <i>–Anabelí Brancusi, ceramicist and artist</i>
        </span>,
      ],
    },
    {
      slug: 'cemetery-celebrations',
      heading: <span>Cemetery celebrations</span>,
      body: [
        <span key="0">
          On <i>Día de Muertos</i>, the spirits of the dead return to the world
          of the living. Cemetery visits often include picnics to spend time
          with relatives and enjoy good food and drink. The favorite foods and
          beverages of the dead are placed on the grave. The dead are quite
          simply offered the most beautiful things that life has to offer:
          flowers, food, beverages, songs and friendship. The traditions are a
          way of arresting the transitoriness of life. To be able to meet again
          whether you are dead or alive.
        </span>,
      ],
      photographTexts: [
        '1. Man at cemetery outside Mexico City. 2018 photo: Frederik Trovatten',
        '2. Flowered grave at cemetery in Milpa Alta Photo: Gösta Montell.',
        '3. Funeral for a child. Photo: Gösta Montell',
      ],
    },
    {
      slug: 'celebration-in-the-streets',
      heading: <span>Celebrations in the streets</span>,
      body: [
        <span key="0">
          In the cities, the traditions surrounding <i>Día de Muertos</i> have
          changed and grown in recent years. Celebrations have become more
          public and commercial. The carnival-like parade in Mexico City is a
          colorful spectacle with elaborate floats, dances and costumes. In the
          cities, enormous altars are erected as pure art installations. They
          are usually not dedicated to one person but are instead intended to
          call attention to a societal problem. Violence against women or
          environmental issues, for example, which are major issues in Mexico.
        </span>,
      ],
      photographTexts: [
        '“There are no words that could do justice to the feeling of being in Mexico and taking part in the Day of the Dead. You just have to experience it yourself.” Frederik Trovatten is a photographer with roots in Denmark. He has been living in Mexico City since 2017.',
      ],
    },
    {
      slug: 'la-catrina-the-skeleton-woman',
      heading: <span>LA CATRINA, THE SKELETON WOMAN</span>,
      body: [
        <span key="0">
          <i>La Catrina</i> is a skeleton-like woman drawn by artist José
          Guadalupe Posada in the early 1900s. She is an upper-class lady
          wearing fancy clothes and a large hat. Posada created La Catrina as a
          critique against the Mexican upper class. An upper class who often had
          roots in the Spanish colonial population. She was meant to be a
          reminder that no power lasts forever and that we will all die at some
          point. La Catrina has become a very popular element in the celebration
          of the Day of the Dead and there have been countless interpretations
          of her.
        </span>,
      ],
      finePrint: 'Reproduction. The original work is from 1910',
    },
    {
      slug: 'dream-of-a-sunday-afternoon-in-alameda-park',
      heading: <span>Dream of a Sunday Afternoon in Alameda Park</span>,
      body: [
        <span key="0">
          Diego Rivera was one of the first artists to highlight{' '}
          <i>Día de Muertos</i>. Among other things, he created large-scale
          <i>ofrenda</i> installations in the mid-1900s. In{' '}
          <i>Dream of a Sunday Afternoon in Alameda Park</i>, Rivera painted a
          number of historical Mexican figures from different periods and
          different origins together in one large mural. Diego Rivera himself is
          shown holding hands with La Catrina. The artist Frida Kahlo, his wife,
          is standing behind them. The woman dressed in yellow watching them may
          just be the important historical figure La Malinche. She was the slave
          woman who went on to become the interpreter for the Spanish
          conquistador Hernán Cortés.
        </span>,
      ],
      finePrint: 'Reproduction. The original work is from 1947-1948',
    },
    {
      slug: 'girl-with-death-mask',
      heading: <span>Girl with Death Mask</span>,
      body: [
        <span key="0">
          The artist Frida Kahlo often addressed death in her art. In this
          painting, we see a little girl with a skull mask. Many believe this
          was a self-portrait. The girl is holding a yellow marigold, like those
          laid on graves on the Day of the Dead. On the ground beside her, we
          see another mask, this one representing a tiger. Frida Kahlo’s life
          was fraught with accidents, illness and chronic pain. The masks in the
          painting can be seen as symbols of her fate.
        </span>,
      ],
      finePrint: 'Reproduction. The original work is from 1938',
    },
  ],
};
