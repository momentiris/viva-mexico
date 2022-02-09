import { Link } from 'react-router-dom';

import { BgStart } from '../assets/bg-start';

export const Start = () => (
  <div className="w-full h-full bg-lightGrey p-4 flex flex-col items-center justify-center">
    <div className="flex items-center justify-center w-full max-w-xs md:max-w-xl h-1/3 md:h-1/2">
      <BgStart />
    </div>

    <p className="italic max-w-sm text-xl md:text-2xl text-center text-darkGrey py-12">
      A journey through the Mexico of traditions – where then meets now and life
      meets death.
    </p>
    <Link
      className="py-1 px-4 border-4 text-darkGrey rounded-xl border-darkGrey text-3xl font-bold"
      to="themes"
    >
      Explore!
    </Link>
  </div>
);
