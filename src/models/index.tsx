import { Maya } from './Maya';
import { Olmek } from './Olmek';
import { SacrificalStone } from './SacrificialStone';
import { Toltek } from './Toltek';
import { SunStoneSmall } from './SunstoneSmall';
import { SacrificialCasket } from './SacrificialCasket';
import { Xolo } from './Xolo';

export {
  Maya,
  Olmek,
  SacrificalStone,
  Toltek,
  SunStoneSmall,
  SacrificialCasket,
  Xolo,
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
];
