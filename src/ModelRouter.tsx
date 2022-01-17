import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

import { ModelWrapper } from './ModelWrapper';

import { Olmek, SunStone, Maya, Toltek, SacrificalStone } from './models/index';

const models: Record<string, React.ReactNode> = {
  olmek: <Olmek />,
  sunstone: <SunStone />,
  maya: <Maya />,
  toltek: <Toltek />,
  sacrificialstone: <SacrificalStone />,
  NOT_FOUND: <Navigate to="/" />,
};

export const ModelRouter = () => {
  const { model } = useParams<'model'>();

  return (
    <div className="bg-gradient-to-bl from-gray-900 to-gray-600 w-full h-full">
      <ModelWrapper>{models[model ?? 'NOT_FOUND']}</ModelWrapper>;
    </div>
  );
};
