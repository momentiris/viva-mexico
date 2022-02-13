import { Article } from './components/Article';
import { Page } from './components/Page';
import { PostContent } from './types';

const article: PostContent = {
  heading: <h1>HUACAL WALL by Diblik Rabia</h1>,
  body: [
    <p key="0">
      The work <i>Huacal Wall</i> was inspired by two different places and
      phases in Mexican history:
    </p>,
    <p key="1">
      <b>El Tajín</b> is a Mesoamerican archaeological site in southern Mexico.
      The pyramid there has been an important location for various ceremonies.
      People used to place altars here to honor their gods.
    </p>,
    <p key="2">
      <i>Huacal City</i> can be found at the largest market in Mexico City. It
      is a gigantic area with thousands of <i>huacales</i> – wooden fruit boxes.
      Huacales are repaired here so that they can be reused, making it into a
      sort of recycling center. Many people work here day and night to scrape
      together a decent wage.
    </p>,
    <p key="3">
      These two places made scenic designer Diblik Rabia think about the Mexican
      society and its cultural identity. Here, the Mesoamerican roots exist side
      by side with the global present and its tough working conditions. The
      Mexican people generally have a positive attitude toward life, though.
      Despite difficult conditions, people find a way to survive.
    </p>,
  ],
};

export const HuacalWall = () => {
  return (
    <Page>
      <Article article={article}></Article>
    </Page>
  );
};
