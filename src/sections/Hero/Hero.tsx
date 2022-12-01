import * as React from 'react';
import { motion } from 'framer-motion';

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
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        Hi, my name is
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        Stanislav Dubuk.
      </motion.h2>
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
      >
        I am a web developer.
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
      >
        Front-End Developer with a passion for perfect UX/UI.
      </motion.p>
      <Button
        className={s.button}
        size={EButtonSizes.Large}
        onClick={handleScroll}
        motionOptions={{
          initialOpacity: 0,
          opacity: 1,
          delay: 1,
          viewport: { once: true },
        }}
      >
        Contact me
      </Button>
    </section>
  );
};
