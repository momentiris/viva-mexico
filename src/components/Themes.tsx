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
            )} text-2xl md:text-3xl text-center font-black py-2 px-4 w-full`}
          >
            Intro
          </Link>
          {themes.map((theme) => (
            <ThemeColor key={theme.name} themeName={theme.name}>
              <Link
                to={`${theme.name}`}
                className={`${utils.deriveBgFromThemeName(
                  theme.name
                )} text-2xl md:text-3xl text-center font-black py-2 px-4 w-full`}
              >
                {theme.label}
                {theme.labelTranslation && ' / ' + theme.labelTranslation}
              </Link>
            </ThemeColor>
          ))}
          <Link
            to="/huacal-wall"
            className="text-2xl md:text-3xl text-center bg-black text-white w-full font-black py-2 px-4"
          >
            Huacal wall
          </Link>
        </div>
      </div>
    </Page>
  );
};

type ThemeColorProps = {
  children: React.ReactNode;
  themeName: string;
};

const ThemeColor = ({ children, themeName }: ThemeColorProps) => {
  const bg = utils.deriveBgFromThemeName(themeName);

  return (
    <div className={`${bg} flex items-center justify-center w-full`}>
      {children}
    </div>
  );
};
