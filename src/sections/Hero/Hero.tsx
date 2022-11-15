import * as React from 'react';

import { Button } from '../../components/ui/Button';
import { EButtonSizes, ESections } from '../../lib/enums';
import { scroll } from '../../lib/utils';

import s from './Hero.module.scss';

interface HeroProps {
  reference: (instance: HTMLElement | null) => void;
}

export const Hero = ({ reference }: HeroProps) => {
  const handleScroll = () => scroll(ESections.Contact);

  return (
    <section id='hero' className={s.root} ref={reference}>
      <h1>Hi, my name is</h1>
      <h2>Stanislav Dubuk.</h2>
      <h3>I am a web developer.</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
        dolor blanditiis eius eum ratione voluptatem ex vitae libero quo odio!
      </p>
      <Button
        className={s.button}
        size={EButtonSizes.Large}
        onClick={handleScroll}
      >
        Contact me
      </Button>
    </section>
  );
};
