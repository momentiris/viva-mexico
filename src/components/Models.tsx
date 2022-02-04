import { Link } from 'react-router-dom';
import { models } from '../models/index';
import { Page } from './Page';

export const Models = () => {
  return (
    <Page>
      <div className="flex flex-col items-center">
        <h1 className="heading-1">All 3D Objects</h1>
        <div className="flex flex-wrap gap-2">
          {models.map((model) => (
            <Link
              to={`/models/${model.slug}`}
              key={model.label}
              className="text-2xl font-bold tracking-wide px-2 py-1 border-4 border-black text-center"
            >
              {model.label}
            </Link>
          ))}
        </div>
      </div>
    </Page>
  );
};
