import { Link } from 'react-router-dom';

import { themesMap } from '../content/themes/index';
import { utils } from '../utils';
import { Page } from './Page';

const {
  colonization,
  colonizationTwo,
  diaDeMuertos,
  independence,
  mictlan,
  mictlanMasks,
  myths,
  origin,
} = themesMap;

const ThemeCard = ({
  name,
  label,
  labelTranslation,
}: {
  name: string;
  label: string;
  labelTranslation?: string;
}) => {
  return (
    <Link
      key={name}
      to={name}
      className={`${utils.deriveBgFromThemeName(
        name
      )} text-2xl md:text-3xl text-center font-bold py-4 px-4 w-full`}
    >
      {label}
      {labelTranslation && ' / ' + labelTranslation}
    </Link>
  );
};

export const Themes = () => {
  return (
    <Page>
      <div className="w-full flex flex-col items-center md:justify-center flex-grow">
        <h2 className="mt-4 my-8 text-gray-800 text-2xl font-bold mx-auto">
          Themes
        </h2>
        <div className="flex flex-col gap-4 items-center text-white max-w-md ">
          <Link
            to="/intro"
            className={`${utils.deriveBgFromThemeName(
              'intro'
            )} text-2xl md:text-3xl text-center font-bold py-4 px-4 w-full`}
          >
            Intro
          </Link>
          <ThemeCard
            name={origin.name}
            label={origin.label}
            labelTranslation={origin.labelTranslation}
          />
          <ThemeCard
            name={colonization.name}
            label={colonization.label}
            labelTranslation={colonization.labelTranslation}
          />
          <ThemeCard
            name={mictlan.name}
            label={mictlan.label}
            labelTranslation={mictlan.labelTranslation}
          />
          <ThemeCard
            name={myths.name}
            label={myths.label}
            labelTranslation={myths.labelTranslation}
          />
          <ThemeCard
            name={colonizationTwo.name}
            label={colonizationTwo.label}
            labelTranslation={colonizationTwo.labelTranslation}
          />
          <Link
            to="/huacal-wall"
            className="text-2xl md:text-3xl text-center bg-black text-white w-full font-bold py-4 px-4"
          >
            Huacal wall
          </Link>
          <ThemeCard
            name={independence.name}
            label={independence.label}
            labelTranslation={independence.labelTranslation}
          />
          <ThemeCard
            name={mictlanMasks.name}
            label={mictlanMasks.label}
            labelTranslation={mictlanMasks.labelTranslation}
          />
          <ThemeCard
            name={diaDeMuertos.name}
            label={diaDeMuertos.label}
            labelTranslation={diaDeMuertos.labelTranslation}
          />
          <Link
            to="/outro"
            className="text-2xl md:text-3xl text-center bg-black text-white w-full font-bold py-4 px-4"
          >
            Outro
          </Link>
        </div>
      </div>
    </Page>
  );
};
