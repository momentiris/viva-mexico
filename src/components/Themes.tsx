import { Link } from 'react-router-dom';

import { themes } from '../content/themes/index';
import { utils } from '../utils';
import { Page } from './Page';

export const Themes = () => {
  return (
    <Page>
      <div className="w-full h-full flex flex-col">
        <h1 className="text-3xl font-black text-gray-800 mx-auto text-center">
          ¡Viva México!
        </h1>
        <h2 className="mt-4 my-8 text-grey text-2xl font-bold mx-auto">
          Themes
        </h2>
        <div className="flex flex-grow flex-col gap-4 items-center justify-center text-white max-w-md mx-auto">
          <ThemeColor key={'intro'} themeName={'intro'}>
            <Link
              to="/intro"
              className="text-2xl md:text-3xl text-center font-black py-2 px-4"
            >
              Intro
            </Link>
          </ThemeColor>
          {themes.map((theme) => (
            <ThemeColor key={theme.name} themeName={theme.name}>
              <Link
                to={`${theme.name}`}
                className="text-2xl md:text-3xl text-center font-black py-2 px-4"
              >
                {theme.label}
                {theme.labelTranslation && ' / ' + theme.labelTranslation}
              </Link>
            </ThemeColor>
          ))}
          <ThemeColor key={'huacal'} themeName={'Huacal wall'}>
            <Link
              to="/huacal-wall"
              className="text-2xl md:text-3xl text-center bg-black text-white w-full font-black py-2 px-4"
            >
              Huacal wall
            </Link>
          </ThemeColor>
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
