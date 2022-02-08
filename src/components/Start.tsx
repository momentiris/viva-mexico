import { Link } from 'react-router-dom';

import { BgStart } from '../assets/bg-start';
import { Page } from './Page';

export const Start = () => (
  <Page>
    <div className="w-full h-full bg-lightGrey flex flex-col items-center justify-center">
      <div className="flex items-center justify-center w-full max-w-xs md:max-w-xl">
        <BgStart />
      </div>

      <p className="italic max-w-sm text-2xl text-center text-darkGrey pt-12">
        A journey through the Mexico of traditions – where then meets now and
        life meets death.
      </p>
      <Link
        className="mt-12 py-2 px-6 border-4 bg-blue text-white rounded-xl border-darkGrey text-4xl font-bold"
        to="themes"
      >
        Explore!
      </Link>
    </div>
  </Page>
);
