import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';

export const Layout = () => {
  return (
    <div className="py-8 px-4 h-full w-full">
      <Navigation />
      <Outlet />
    </div>
  );
};
