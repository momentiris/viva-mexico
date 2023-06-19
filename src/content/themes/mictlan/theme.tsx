import { Theme } from '../../../types';
import {
  mictlantecuhtli,
  roadToEmptiness,
  salvationOfTheSoul,
  theBonesOfTheDeadAreSeeds,
  thePlaceThatLifeDoesNotKnow,
  xipeTotec,
  xolotl,
} from './object-texts';

export const mictlan: Theme = {
  name: 'mictlan',
  label: 'Mictlán',
  labelTranslation: 'Journey to Mictlán',
  content: [
    {
      label: 'Journey to Mictlán',
      introduction: {
        heading: <span>Journey to Mictlán</span>,
        body: [
          <p className="paragraph" key="0">
            The Mexican artists' collective DÄ has chosen to take as its
            starting point from the original beliefs and stories of life and
            death that existed before the Spanish colonization. In their art,
            they highlight some of the central symbols, deities and gods, and
            especially the unique approach to death. Mictlán is one of the many
            realms of death they tell us about, and where most of the dead go.
            By highlighting the theme, the artists want to preserve and respect
            their respect their cultural heritage. "We want to tell the story of
            a more just, global and inclusive world that allows for human
            diversity. This has been denied all the original peoples of the
            Americas. We share the struggle for life and liberty. They never
            conquered us, our traditions live and permeate our way of looking at
            life and death."
          </p>,
        ],
      },
      timeline: [],
      labels: [],
      objectTexts: [
        salvationOfTheSoul,
        xolotl,
        theBonesOfTheDeadAreSeeds,
        xipeTotec,
        roadToEmptiness,
        mictlantecuhtli,
        thePlaceThatLifeDoesNotKnow,
      ],
    },
  ],
};
