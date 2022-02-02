import React from 'react';

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

export const models = [
  { slug: 'maya', label: 'Maya', element: <Maya /> },
  { slug: 'olmek', label: 'Olmek', element: <Olmek /> },
  {
    slug: 'sacrificialstone',
    label: 'Sacrificial Stone',
    element: <SacrificialStone />,
  },
  { slug: 'toltek', label: 'Toltek', element: <Toltek /> },
  { slug: 'sunstone', label: 'Sun Stone', element: <SunStoneSmall /> },
  {
    slug: 'sacrificialcasket',
    label: 'Sacrificial Casket',
    element: <SacrificialCasket />,
  },
  { slug: 'xolo', label: 'Xolo', element: <Xolo /> },
  {
    slug: 'chalchiutlicue',
    label: 'Chalchiutlicue',
    element: <Chalchiutlicue />,
  },
  { slug: 'maskincense', label: 'Mask Incense', element: <MaskIncense /> },
  { slug: 'knifefigure', label: 'Knife Figure', element: <KnifeFigure /> },
  {
    slug: 'mictlantecutli',
    label: 'Mictlantecutli',
    element: <Mictlantecutli />,
  },
  { slug: 'quetzalcoatl', label: 'Quetzalcoatl', element: <Quetzalcoatl /> },
  { slug: 'skarva', label: 'Skarva', element: <Skarva /> },
  { slug: 'xochiquetzal', label: 'Xochiquetzal', element: <Xochiquetzal /> },
];
