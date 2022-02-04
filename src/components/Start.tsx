import { Link } from 'react-router-dom';
import { Page } from './Page';

export const Start = () => (
  <Page>
    <div className="w-full h-full bg-lightGrey flex flex-col  items-center justify-around">
      <div className="flex items-center justify-center bg-start bg-contain bg-no-repeat bg-top w-full max-w-xl h-full max-h-96" />

      <p className="italic text-xl max-w-md text-darkGrey">
        A journey through the Mexico of traditions – where then meets now and
        life meets death.
      </p>
      <Link
        className="p-4 drop-shadow-2xl shadow-black text-4xl  font-bold text-darkGrey underline"
        to="themes"
      >
        Explore!
      </Link>
    </div>
  </Page>
);
