import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

import { ModelWrapper } from './ModelWrapper';

import {
  Olmek,
  SunStoneSmall,
  Maya,
  Toltek,
  SacrificalStone,
} from './models/index';

const models: Record<string, React.ReactNode> = {
  olmek: <Olmek />,

  maya: <Maya />,
  toltek: <Toltek />,
  sacrificialstone: <SacrificalStone />,
  sunstonesmall: <SunStoneSmall />,
};

export const ModelRouter = () => {
  const { model } = useParams<'model'>();

  if (!model || !models[model]) {
    return <Navigate to="/" />;
  }

  return (
    <div className="bg-gradient-to-bl from-gray-900 to-gray-600 w-full h-full">
      <ModelWrapper>{models[model]}</ModelWrapper>;
    </div>
  );
};
