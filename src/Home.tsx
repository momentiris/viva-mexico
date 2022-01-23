import { Link } from 'react-router-dom';
import { themes } from './content/themes/index';

export const Home = () => {
  console.log('hl');
  return (
    <div className="w-full h-full bg-blue">
      <div className="mx-auto flex h-full flex-col items-center justify-center text-white">
        {themes.map((theme) => (
          <Link
            to={`theme/${theme.name}`}
            className="text-2xl font-bold"
            key={theme.name}
          >
            {theme.label}
          </Link>
        ))}
      </div>
    </div>
  );
};
