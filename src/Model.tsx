import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

import { PresentationalScene } from './PresentationalScene';

import {
  Olmek,
  SunStoneSmall,
  Maya,
  Toltek,
  SacrificalStone,
  SacrificialCasket,
  Xolo,
} from './models/index';

const models: Record<string, React.ReactNode> = {
  olmek: <Olmek />,
  maya: <Maya />,
  toltek: <Toltek />,
  sacrificialstone: <SacrificalStone />,
  sunstonesmall: <SunStoneSmall />,
  sacrificialcasket: <SacrificialCasket />,
  xolo: <Xolo />,
};

export const Model = () => {
  const { model } = useParams<'model'>();
  console.log('hello');
  if (!model || !models[model]) {
    return <Navigate to="/" />;
  }

  return (
    <div className="bg-gradient-to-bl from-gray-900 to-gray-600 w-full h-full">
      <PresentationalScene>{models[model]}</PresentationalScene>;
    </div>
  );
};
