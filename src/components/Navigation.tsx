import React from 'react';
import { HiMenu } from 'react-icons/hi';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Hamburger = ({
  onClick,
  isActive,
}: {
  onClick: () => void;
  isActive: boolean;
}) => (
  <button
    onClick={onClick}
    className={`${
      isActive ? 'bg-gray-100 text-black' : 'bg-gray-800 text-gray-100'
    } w-10 h-10 rounded-full flex items-center justify-center drop-shadow-md shadow-black`}
  >
    <HiMenu size="24" />
  </button>
);

type NavLinksProps = {
  onClick: () => void;
};

const NavLinks = ({ onClick }: NavLinksProps) => {
  return (
    <ul className="text-gray-200 font-bold text-3xl flex flex-col gap-2">
      <li className="hover:bg-gray-200 active:bg-gray-200 hover:text-gray-800 active:text-gray-800 p-2 w-max transition-colors duration-150">
        <NavLink onClick={onClick} to="/">
          Start
        </NavLink>
      </li>
      <li className="hover:bg-gray-200 active:bg-gray-200 hover:text-gray-800 active:text-gray-800 p-2 w-max transition-colors duration-150">
        <NavLink onClick={onClick} to="/themes">
          Themes
        </NavLink>
      </li>
      <li className="hover:bg-gray-200 hover:text-gray-800 p-2 w-max transition-colors duration-150">
        <NavLink onClick={onClick} to="/models">
          3D - Objects
        </NavLink>
      </li>
      <li className="">
        <NavLink
          onClick={onClick}
          to="/in-depth"
          className="hover:bg-gray-200 hover:text-gray-800 p-2 w-max transition-colors duration-150 block mb-2"
        >
          In-depth texts / Lee mas
        </NavLink>
        <ul className="flex flex-col gap-2">
          <li className="hover:bg-gray-200 hover:text-gray-800 p-1 ml-8 w-max transition-colors duration-150 text-2xl">
            <NavLink onClick={onClick} to="/in-depth?lang=en">
              - English
            </NavLink>
          </li>
          <li className="hover:bg-gray-200 hover:text-gray-800 p-1 ml-8 w-max transition-colors duration-150 text-2xl">
            <NavLink onClick={onClick} to="/in-depth?lang=sv">
              - Svenska
            </NavLink>
          </li>
          <li className="hover:bg-gray-200 hover:text-gray-800 p-1 ml-8 w-max transition-colors duration-150 text-2xl">
            <NavLink onClick={onClick} to="/in-depth?lang=mx">
              - Español
            </NavLink>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export const Navigation = () => {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <div
        className={`${
          open ? 'translate-x-0' : 'translate-x-full'
        } fixed w-screen h-full top-0 left-0 bg-gray-800 z-10`}
      >
        <div className="flex h-full items-center justify-center">
          <NavLinks onClick={() => setOpen(false)} />
        </div>
      </div>
      <div
        className={`${!open ? 'bg-white' : ''} ${
          !isHome ? 'border-b-4 border-gray-800' : ''
        } fixed top-0 left-0 w-full flex items-center justify-between pt-4 pb-4 px-4`}
        style={{ zIndex: '9999' }}
      >
        <div
          className={`${
            open ? 'text-lightGrey' : 'text-gray-800'
          } text-2xl font-black`}
        >
          <Link onClick={() => setOpen(false)} to="/themes">
            ¡VIVA MÉXICO!
          </Link>
        </div>
        <Hamburger isActive={open} onClick={() => setOpen((open) => !open)} />
      </div>
    </>
  );
};
