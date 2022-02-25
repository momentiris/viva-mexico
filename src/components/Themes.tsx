import { Link } from 'react-router-dom';

import { themes } from '../content/themes/index';
import { utils } from '../utils';
import { Page } from './Page';

export const Themes = () => {
  return (
    <Page>
      <div className="w-full flex flex-col items-center md:justify-center flex-grow">
        <h2 className="mt-4 my-8 text-gray-800 text-2xl font-bold mx-auto">
          Themes
        </h2>
        <div className="flex  flex-col gap-4 items-center text-white max-w-md ">
          <Link
            to="/intro"
            className={`${utils.deriveBgFromThemeName(
              'intro'
            )} text-2xl md:text-3xl text-center font-bold py-2 px-4 w-full`}
          >
            Intro
          </Link>
          {themes.map((theme) => (
            <Link
              key={theme.name}
              to={`${theme.name}`}
              className={`${utils.deriveBgFromThemeName(
                theme.name
              )} text-2xl md:text-3xl text-center font-bold py-2 px-4 w-full`}
            >
              {theme.label}
              {theme.labelTranslation && ' / ' + theme.labelTranslation}
            </Link>
          ))}
          <Link
            to="/huacal-wall"
            className="text-2xl md:text-3xl text-center bg-black text-white w-full font-bold py-2 px-4"
          >
            Huacal wall
          </Link>
        </div>
      </div>
    </Page>
  );
};
