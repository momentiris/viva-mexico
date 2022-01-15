import { Link } from 'react-router-dom';
import { themes } from './content/themes/index.js';

export const Home = () => {
  return (
    <div className="w-full h-full bg-mexicoBlue">
      <div className="mx-auto flex h-full flex-col items-center justify-center text-white">
        {themes.map((theme) => (
          <Link to={theme.name} className="text-2xl font-bold" key={theme.name}>
            {theme.label}
          </Link>
        ))}
      </div>
    </div>
  );
};
