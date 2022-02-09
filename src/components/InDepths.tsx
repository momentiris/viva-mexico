import { Link } from 'react-router-dom';

import { inDepthTexts } from '../content/in-depth-texts';
import { useQuery } from '../hooks/useQuery';
import { InDepthText, Locale } from '../types';
import { Page } from './Page';

export const InDepths = () => {
  const query = useQuery();
  const currentLang = query.get('lang');

  return (
    <Page>
      <div className="flex flex-col gap-8 items-center pt-8">
        <div className="flex flex-col gap-12">
          {Object.entries(
            inDepthTexts.reduce(asLocaleMap, { sv: [], en: [], mx: [] })
          )
            .filter(([lang]) =>
              keepCurrentLangIfExistsAndIsLocale(lang as Locale, currentLang)
            )
            .map(([locale, texts]) => (
              <Section
                key={locale}
                label={localeAsHumanReadable(locale as Locale)}
                posts={texts}
              />
            ))}
        </div>
      </div>
    </Page>
  );
};

type SectionProps = {
  label: string;
  posts: InDepthText[];
};

const Section = ({ label, posts }: SectionProps) => (
  <div>
    <h2 className="heading-2">{label}</h2>
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <Link
          key={post.slug}
          to={`${post.slug}`}
          className="text-xl block underline"
        >
          {post.name}
        </Link>
      ))}
    </div>
  </div>
);

const keepCurrentLangIfExistsAndIsLocale = (
  lang: Locale,
  currentLang: string | null
) => {
  if (!currentLang) return true;

  return !isLocale(currentLang) ? true : currentLang === lang;
};

const isLocale = (lang: string): lang is Locale => {
  if (lang === 'sv' || lang === 'en' || lang === 'mx') return true;
  return false;
};

const asLocaleMap = (
  accumulator: Record<Locale, InDepthText[]>,
  current: InDepthText
) =>
  Object.assign({}, accumulator, {
    [current.locale]: accumulator[current.locale].concat(current),
  });

const localeLabelMap: Record<Locale, string> = {
  sv: 'Svenska',
  en: 'English',
  mx: 'Español',
};

const localeAsHumanReadable = (locale: Locale) => localeLabelMap[locale];
