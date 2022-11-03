import * as React from 'react';

import s from './Navbar.module.scss';

interface NavbarProps {
  activeTab: string;
}

export const Navbar = ({ activeTab }: NavbarProps) => {
  const getStyles = () => {
    if (activeTab === 'hero') return;
    if (activeTab === 'projects')
      return { transform: 'translateX(calc(100% - 2px))' };
    if (activeTab === 'about')
      return { transform: 'translateX(calc(200% - 4px))' };
  };

  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.item} style={getStyles()}></div>
      </div>
    </div>
  );
};
