import React from 'react';

import { HiMenu } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

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
    } p-4 w-max rounded-full flex items-center justify-center drop-shadow-lg shadow-black`}
  >
    <HiMenu size="24" />
  </button>
);

type NavLinksProps = {
  onClick: () => void;
};

const NavLinks = ({ onClick }: NavLinksProps) => {
  return (
    <ul className="text-gray-200 font-black text-3xl flex flex-col gap-4">
      <li className="hover:bg-gray-200 active:bg-gray-200 hover:text-gray-800 active:text-gray-800 p-2 w-max transition-colors duration-150">
        <NavLink onClick={onClick} to="/">
          Start
        </NavLink>
      </li>
      <li className="hover:bg-gray-200 hover:text-gray-800 p-2 w-max transition-colors duration-150">
        <NavLink onClick={onClick} to="/models">
          3D - Objects
        </NavLink>
      </li>
      <li className="hover:bg-gray-200 hover:text-gray-800 p-2 w-max transition-colors duration-150">
        <NavLink onClick={onClick} to="/in-depth">
          In-depth texts
        </NavLink>
      </li>
      <li className="hover:bg-gray-200 hover:text-gray-800 p-2 w-max transition-colors duration-150">
        <NavLink onClick={onClick} to="/map">
          Map
        </NavLink>
      </li>
    </ul>
  );
};

export const Navigation = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div
        className={`${
          open ? 'translate-x-0' : 'translate-x-full'
        } fixed w-screen h-screen top-0 left-0 bg-gray-800`}
      >
        <div className="flex h-full items-center justify-center">
          <NavLinks onClick={() => setOpen(false)} />
        </div>
      </div>
      <div className="fixed top-5 right-5 z-50">
        <Hamburger isActive={open} onClick={() => setOpen((open) => !open)} />
      </div>
    </>
  );
};
