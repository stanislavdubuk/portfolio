import * as React from 'react';

import { Container } from '../Container';

import s from './Hero.module.scss';

interface HeroProps {
  reference: (instance: HTMLElement | null) => void;
}

export const Hero = ({ reference }: HeroProps) => {
  return (
    <section className={s.root} ref={reference}>
      <Container>
        <div className={s.content}>
          <div className={s.info}></div>
          <div className={s.personal}></div>
        </div>
      </Container>
      <div className={s.wave}>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z'
            className={s.shape}
          ></path>
        </svg>
      </div>
    </section>
  );
};
