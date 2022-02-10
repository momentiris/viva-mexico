import { Navigate, useParams } from 'react-router-dom';

import { PresentationalScene } from './PresentationalScene';
import { models } from '../models/index';

export const Model = () => {
  const params = useParams<'model'>();
  const model = models.find((model) => model.slug === params.model);

  if (!model) {
    return <Navigate to="/" />;
  }

  return (
    <div className="bg-gradient-to-bl from-gray-900 to-gray-600 h-full pt-20">
      <PresentationalScene>{model.element}</PresentationalScene>
    </div>
  );
};
