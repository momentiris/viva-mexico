import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';

export const Layout = () => {
  return (
    <div className="pt-8 pb-8 px-6 min-h-screen w-full">
      <Navigation />
      <Outlet />
    </div>
  );
};
