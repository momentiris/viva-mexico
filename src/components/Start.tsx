import { Link } from 'react-router-dom';

export const Start = () => (
  <div className="w-full h-full bg-gray-100 p-8 flex flex-col items-center">
    <div className="flex items-center justify-center bg-start bg-contain bg-no-repeat bg-center w-full max-w-xl h-3/4" />
    <Link
      className="p-4 drop-shadow-2xl shadow-black text-4xl uppercase font-bold text-darkGrey underline"
      to="themes"
    >
      Go to themes
    </Link>
  </div>
);
