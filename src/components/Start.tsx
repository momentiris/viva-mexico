import { Link } from 'react-router-dom';

import { BgStart } from '../assets/bg-start';

export const Start = () => (
  <div className="w-full p-4 flex flex-col items-center justify-center h-full pt-20 md:pt-4">
    <div className="flex items-center justify-center w-full max-w-xs md:max-w-xl h-44 md:h-1/2">
      <BgStart />
    </div>

    <p className="max-w-sm text-xl md:text-2xl text-center text-darkGrey py-12">
      A journey through Mexico of traditions – where then meets now and life
      meets death.
    </p>

    <Link
      className="py-1 px-4 border-4 text-darkGrey border-darkGrey text-3xl font-bold"
      to="themes"
    >
      Explore!
    </Link>
  </div>
);
