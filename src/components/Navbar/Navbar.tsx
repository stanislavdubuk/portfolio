import * as React from 'react';
import { ESections } from '../../lib/enums';

import s from './Navbar.module.scss';

interface NavbarProps {
  activeSection: ESections;
}

export const Navbar = ({ activeSection }: NavbarProps) => {
  const getStyles = () => {
    if (activeSection === ESections.Projects)
      return { transform: 'translateX(calc(100% - 2px))' };
    if (activeSection === ESections.About)
      return { transform: 'translateX(calc(200% - 4px))' };
  };

  return (
    <nav className={s.root}>
      <div className={s.container}>
        <div className={s.item} style={getStyles()}></div>
      </div>
    </nav>
  );
};
