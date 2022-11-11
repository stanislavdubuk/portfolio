import * as React from 'react';
import { Svg } from '../ui/Svg';

import s from './Footer.module.scss';

export const Footer = () => {
  const handleScroll = () =>
    document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className={s.root}>
      <div className={s.content}>
        <Svg
          className={s.icon}
          src='logo'
          width={40}
          height={40}
          onClick={handleScroll}
        />
        <span>2022</span>
      </div>
    </footer>
  );
};
