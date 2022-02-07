import React from 'react';

import { Model } from '../types';

const Maya = React.lazy(() => import('./Maya'));
const Olmek = React.lazy(() => import('./Olmek'));
const Toltek = React.lazy(() => import('./Toltek'));
const SunStoneSmall = React.lazy(() => import('./SunstoneSmall'));
const SacrificialCasket = React.lazy(() => import('./SacrificialCasket'));
const Xolo = React.lazy(() => import('./Xolo'));
const Chalchiutlicue = React.lazy(() => import('./Chalchiutlicue'));
const KnifeFigure = React.lazy(() => import('./KnifeFigure'));
const MaskIncense = React.lazy(() => import('./MaskIncense'));
const Mictlantecutli = React.lazy(() => import('./Mictlantecutli'));
const Quetzalcoatl = React.lazy(() => import('./Quetzalcoatl'));
const Skarva = React.lazy(() => import('./Skarva'));
const Xochiquetzal = React.lazy(() => import('./Xochiquetzal'));
const SacrificialStone = React.lazy(() => import('./SacrificialStone'));

export {
  Maya,
  Olmek,
  SacrificialStone,
  Toltek,
  SunStoneSmall,
  SacrificialCasket,
  Xolo,
  Chalchiutlicue,
  MaskIncense,
  KnifeFigure,
  Mictlantecutli,
  Quetzalcoatl,
  Skarva,
  Xochiquetzal,
};

export const models: Model[] = [
  { slug: 'maya', label: 'Maya', element: <Maya />, theme: 'origin' },
  { slug: 'olmek', label: 'Olmek', element: <Olmek />, theme: 'origin' },
  { slug: 'toltek', label: 'Toltek', element: <Toltek />, theme: 'origin' },
  {
    slug: 'chalchiutlicue',
    label: 'Chalchiutlicue',
    element: <Chalchiutlicue />,
    theme: 'creation-myths',
  },
  {
    slug: 'sunstone',
    label: 'Sun Stone',
    element: <SunStoneSmall />,
    theme: 'creation-myths',
  },
  {
    slug: 'xochiquetzal',
    label: 'Xochiquetzal',
    element: <Xochiquetzal />,
    theme: 'creation-myths',
  },
  {
    slug: 'quetzalcoatl',
    label: 'Quetzalcoatl',
    element: <Quetzalcoatl />,
    theme: 'creation-myths',
  },
  {
    slug: 'maskincense',
    label: 'Mask Incense',
    element: <MaskIncense />,
    theme: 'death-myths',
  },
  {
    slug: 'knifefigure',
    label: 'Knife Figure',
    element: <KnifeFigure />,
    theme: 'death-myths',
  },
  {
    slug: 'mictlantecutli',
    label: 'Mictlantecutli',
    element: <Mictlantecutli />,
    theme: 'death-myths',
  },
  {
    slug: 'sacrificialcasket',
    label: 'Sacrificial Casket',
    element: <SacrificialCasket />,
    theme: 'death-myths',
  },
  {
    slug: 'sacrificialstone',
    label: 'Sacrificial Stone',
    element: <SacrificialStone />,
    theme: 'death-myths',
  },
  { slug: 'xolo', label: 'Xolo', element: <Xolo />, theme: 'death-myths' },
  {
    slug: 'skarva',
    label: 'Skarva',
    element: <Skarva />,
    theme: 'death-myths',
  },
];
