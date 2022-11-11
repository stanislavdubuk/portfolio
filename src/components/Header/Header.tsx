import * as React from 'react';

import { Svg } from '../ui/Svg';
import { Button } from '../ui/Button';

import { scroll } from '../../lib/utils';
import { EButtonSizes, ESections } from '../../lib/enums';

import s from './Header.module.scss';

export const Header = () => {
  const handleScroll = (sectionId: ESections) => scroll(sectionId);
  return (
    <header className={s.root}>
      <nav className={s.nav}>
        <Svg
          className={s.icon}
          src='logo'
          width={60}
          height={60}
          onClick={() => handleScroll(ESections.Hero)}
        />

        <div className={s.navigation}>
          <div
            className={s.item}
            onClick={() => handleScroll(ESections.Projects)}
          >
            <span className={s.number}>01.</span>
            <span>Projects</span>
          </div>
          <div className={s.item} onClick={() => handleScroll(ESections.About)}>
            <span className={s.number}>02.</span>
            <span>About</span>
          </div>
          <div
            className={s.item}
            onClick={() => handleScroll(ESections.Contact)}
          >
            <span className={s.number}>03.</span>
            <span>Contact</span>
          </div>
        </div>
        <Button size={EButtonSizes.Medium}>Resume</Button>
      </nav>
    </header>
  );
};
