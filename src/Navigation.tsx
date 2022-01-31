import React from 'react';

import { HiMenu } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

const Hamburger = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="bg-black text-white p-4 w-max rounded-full shadow-md shadow-zinc-600 flex items-center justify-center"
  >
    <HiMenu size="24" />
  </button>
);

type NavLinksProps = {
  onClick: () => void;
};

const NavLinks = ({ onClick }: NavLinksProps) => {
  return (
    <ul>
      <li>
        <NavLink onClick={onClick} to="/">
          Start
        </NavLink>
      </li>
      <li>
        <NavLink onClick={onClick} to="/models">
          3D - Objects
        </NavLink>
      </li>
      <li>
        <NavLink onClick={onClick} to="/in-depth">
          Fördjupningstexter
        </NavLink>
      </li>
      <li>
        <NavLink onClick={onClick} to="/map">
          Karta / map
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
        } fixed w-screen h-screen top-0 left-0 bg-gray-300`}
      >
        <div className="flex h-full items-center justify-center">
          <NavLinks onClick={() => setOpen(false)} />
        </div>
      </div>
      <div className="fixed top-5 right-5 z-50">
        <Hamburger onClick={() => setOpen((open) => !open)} />
      </div>
    </>
  );
};
