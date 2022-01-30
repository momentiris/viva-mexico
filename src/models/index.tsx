import { Maya } from './Maya';
import { Olmek } from './Olmek';
import { SacrificalStone } from './SacrificialStone';
import { Toltek } from './Toltek';
import { SunStoneSmall } from './SunstoneSmall';
import { SacrificialCasket } from './SacrificialCasket';
import { Xolo } from './Xolo';
import { Chalchiutlicue } from './Chalchiutlicue';
import { KnifeFigure } from './KnifeFigure';
import { MaskIncense } from './MaskIncense';
import { Mictlantecutli } from './Mictlantecutli';
import { Quetzalcoatl } from './Quetzalcoatl';
import { Skarva } from './Skarva';
import { Xochiquetzal } from './Xochiquetzal';

export {
  Maya,
  Olmek,
  SacrificalStone,
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
    element: <SacrificalStone />,
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
