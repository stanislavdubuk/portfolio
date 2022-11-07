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
    </section>
  );
};
