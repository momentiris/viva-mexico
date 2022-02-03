import { Link } from 'react-router-dom';

export const Start = () => (
  <div className="w-full h-full bg-gray-100 p-8">
    <div className="w-full h-full flex items-center justify-center bg-start bg-contain bg-no-repeat bg-top">
      <Link
        className="p-4 border-8 border-gray-800 bg-gray-100 shadow-xl text-xl font-black rounded-xl"
        to="themes"
      >
        Go to themes
      </Link>
    </div>
  </div>
);
