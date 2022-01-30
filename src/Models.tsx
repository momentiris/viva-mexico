import { Link } from 'react-router-dom';
import { models } from './models/index';

export const Models = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="heading-1">All 3D Objects</h1>
      <div className="flex flex-col">
        {models.map((model) => (
          <Link
            to={`/models/${model.slug}`}
            key={model.label}
            className="heading-2"
          >
            {model.label}
          </Link>
        ))}
      </div>
    </div>
  );
};
