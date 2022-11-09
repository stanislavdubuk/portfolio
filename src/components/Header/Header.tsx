import * as React from 'react';

import { ESections } from '../../lib/enums';

import s from './Header.module.scss';

interface HeaderProps {
  activeSection: ESections;
}

export const Header = ({ activeSection }: HeaderProps) => {
  return (
    <header className={s.root}>
      <nav className={s.nav}>
        <div className={s.left}>stanislav</div>
        <div className={s.right}>
          <div className={s.item}>
            <span className={s.number}>01.</span>
            <span>About</span>
          </div>
          <div className={s.item}>
            <span className={s.number}>02.</span>
            <span>Projects</span>
          </div>
          <div className={s.item}>
            <span className={s.number}>03.</span>
            <span>Contact</span>
          </div>
        </div>
      </nav>
    </header>
  );
};
