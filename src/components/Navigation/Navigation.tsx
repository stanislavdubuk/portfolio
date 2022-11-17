import * as React from 'react';

import { ESections } from '../../lib/enums';

import s from './Navigation.module.scss';

interface NavigationProps {
  handleScroll: (value: ESections) => void;
}

export const Navigation = ({ handleScroll }: NavigationProps) => {
  return (
    <React.Fragment>
      <div className={s.root}>
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
        <div className={s.item} onClick={() => handleScroll(ESections.Contact)}>
          <span className={s.number}>03.</span>
          <span>Contact</span>
        </div>
      </div>
    </React.Fragment>
  );
};
