import * as React from 'react';

import { Container } from '../Container';

import s from './About.module.scss';

interface AboutProps {
  reference: (instance: HTMLElement | null) => void;
}

export const About = ({ reference }: AboutProps) => {
  return (
    <section className={s.root} ref={reference}>
      <div className={s.wave}>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z'
            className={s.shape}
          ></path>
        </svg>
      </div>
      <Container>
        <div className={s.content}>
          <div className={s.about}></div>
        </div>
      </Container>
    </section>
  );
};
