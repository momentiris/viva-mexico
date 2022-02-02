import { Link } from 'react-router-dom';
import { themes } from '../content/themes/index';

export const Themes = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <h1 className="text-4xl font-black text-gray-800 mx-auto text-center">
        Viva México!
      </h1>
      <div className="flex flex-grow flex-col gap-4 items-center justify-center text-white pt-8">
        {themes.map((theme) => (
          <ThemeColor key={theme.name} themeName={theme.name}>
            <Link
              to={`${theme.name}`}
              className="text-3xl font-black no-underline py-2 px-4"
            >
              {theme.label} / {theme.labelTranslation}
            </Link>
          </ThemeColor>
        ))}
      </div>
    </div>
  );
};

type ThemeColorProps = {
  children: React.ReactNode;
  themeName: string;
};

const ThemeColor = ({ children, themeName }: ThemeColorProps) => {
  const bg = deriveBgColorFromThemeName(themeName);

  return (
    <div className={`${bg} flex items-center justify-center `}>{children}</div>
  );
};

const deriveBgColorFromThemeName = (themeName: string) =>
  ({
    'creation-myths': 'bg-beige',
    'death-myths': 'bg-beige',
    origin: 'bg-red',
    independence: 'bg-blue',
    colonization: 'bg-orange',
    'dia-de-muertos': 'bg-grey',
  }[themeName]);
