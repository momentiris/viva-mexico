import { Theme } from '../../../types';
import {
  coatlique,
  ehecatl,
  mayahuel,
  oldGodsByIsaiasMorales,
  quetzalcoatl,
  tialoc,
  tonatiuh,
} from './object-texts';

export const mictlanMasks: Theme = {
  name: 'mictlan-masks',
  label: 'Mictlán',
  labelTranslation: 'Journey to Mictlán - Masks',
  content: [
    {
      label: '',
      timeline: [],
      labels: [],
      objectTexts: [
        oldGodsByIsaiasMorales,
        ehecatl,
        quetzalcoatl,
        mayahuel,
        tonatiuh,
        tialoc,
        coatlique,
      ],
    },
  ],
};
