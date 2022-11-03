import * as React from 'react';

import s from './Hero.module.scss';

interface HeroProps {
  reference: any;
}

export const Hero = ({ reference }: HeroProps) => {
  return (
    <div className={s.root} ref={reference}>
      <h1>HERO</h1>
    </div>
  );
};
