// src/components/Menu.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="w-full bg-gray-800 p-4 shadow-md flex items-center">
      {/* Titre Cyberpsycho à gauche */}
      <div className="text-white text-xl font-bold">
        <NavLink to="/" className="hover:text-blue-500">
          Cyberpsychomot
        </NavLink>
      </div>

      {/* Menu à droite */}
      <ul className="flex space-x-8 mx-auto">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-white border-b-2 border-blue-500 pb-1" : "text-gray-400 hover:text-white"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reserver"
            className={({ isActive }) =>
              isActive ? "text-white border-b-2 border-blue-500 pb-1" : "text-gray-400 hover:text-white"
            }
          >
            Réserver
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/glossaire"
            className={({ isActive }) =>
              isActive ? "text-white border-b-2 border-blue-500 pb-1" : "text-gray-400 hover:text-white"
            }
          >
            Glossaire
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-white border-b-2 border-blue-500 pb-1" : "text-gray-400 hover:text-white"
            }
          >
            À propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
