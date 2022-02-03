import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';

export const Layout = () => {
  return (
    <div className=" min-h-screen w-full">
      <Navigation />
      <Outlet />
    </div>
  );
};
