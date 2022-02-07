import { Link } from 'react-router-dom';

import { models } from '../models/index';
import { Model } from '../types';
import { utils } from '../utils';
import { Page } from './Page';

export const Models = () => {
  console.log(Object.entries(models.reduce(asThemeMap, {})));
  return (
    <Page>
      <div className="flex flex-col items-center max-w-2xl mx-auto">
        <div className="flex flex-col gap-8 max-w-md">
          {Object.entries(models.reduce(asThemeMap, {})).map(
            ([theme, models]) => (
              <div
                key={theme}
                className={`${utils.deriveColorFromThemeName(theme)}`}
              >
                <Section label={themeLabelMap[theme]} models={models} />
              </div>
            )
          )}
        </div>
      </div>
    </Page>
  );
};

type SectionProps = {
  label: string;
  models: Model[];
};

const Section = ({ label, models }: SectionProps) => (
  <>
    <h2 className={`text-black heading-2`}>{label}</h2>
    <div className="flex flex-wrap gap-2">
      {models.map((item) => (
        <Link
          key={item.slug}
          to={`/models/${item.slug}`}
          className="text-2xl font-bold tracking-wide px-2 py-1 border-4 w-max text-black border-current"
        >
          {item.label}
        </Link>
      ))}
    </div>
  </>
);

const themeLabelMap: Record<string, string> = {
  origin: 'Origin',
  'creation-myths': 'Creation Myths',
  'death-myths': 'Death Myths',
};

const asThemeMap = (acc: Record<string, Model[]>, model: Model) =>
  Object.assign({}, acc, {
    [model.theme]: (acc[model.theme] ?? []).concat(model),
  });
