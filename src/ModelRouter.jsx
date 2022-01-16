import { Navigate, useParams } from 'react-router-dom';

import { ModelWrapper } from './ModelWrapper.jsx';

import {
  Olmek,
  SunStone,
  Maya,
  Toltek,
  SacrificalStone,
} from './models/index.jsx';

const models = {
  olmek: <Olmek />,
  sunstone: <SunStone />,
  maya: <Maya />,
  toltek: <Toltek />,
  sacrificialstone: <SacrificalStone />,
};

export const ModelRouter = () => {
  const params = useParams();
  const model = models[params.model];

  if (!model) {
    return <Navigate to="/" />;
  }

  return (
    <div className="bg-gradient-to-bl from-gray-900 to-gray-600 w-full h-full">
      <ModelWrapper>{model}</ModelWrapper>;
    </div>
  );
};
