import { Outlet } from 'react-router-dom';

import { Navigation } from './Navigation';

export const Layout = () => {
  return (
    <div className="w-full h-full">
      <Navigation />
      <Outlet />
    </div>
  );
};
