import { Link } from 'react-router-dom';
import { themes } from './content/themes/index';

export const Themes = () => {
  return (
    <div className="w-full h-full">
      <h1 className="heading-1">Viva México!</h1>
      <div className="mx-auto flex h-full flex-col items-center justify-center text-white">
        {themes.map((theme) => (
          <ThemeColorSection key={theme.name} themeName={theme.name}>
            <Link to={`${theme.name}`} className="text-2xl font-bold">
              {theme.label}
            </Link>
          </ThemeColorSection>
        ))}
      </div>
    </div>
  );
};

type ThemeColorSectionProps = {
  children: React.ReactNode;
  themeName: string;
};

const ThemeColorSection = ({ children, themeName }: ThemeColorSectionProps) => {
  const bg = deriveBgColorFromThemeName(themeName);

  return (
    <div className={`${bg} flex-grow w-full flex items-center justify-center`}>
      {children}
    </div>
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
