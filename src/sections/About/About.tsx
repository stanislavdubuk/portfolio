import * as React from 'react';
import { motion } from 'framer-motion';

import { Svg } from '../../components/ui/Svg';
import { SECTION_DELAY } from '../../lib/constants';

import s from './About.module.scss';

interface AboutProps {
  reference: (instance: HTMLElement | null) => void;
}

export const About = ({ reference }: AboutProps) => {
  return (
    <motion.section
      id='about'
      className={s.root}
      ref={reference}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: SECTION_DELAY }}
    >
      <h1 className={s.heading}>02.</h1>
      <div className={s.content}>
        <p className={s.about}>
          <span>
            I am a front-end developer with a background in business management.
          </span>
          <span>
            My background includes a lot of experience working in various
            companies around the world and now I am excited to combine it with
            my love of technology.
          </span>
          <span>
            I'm always looking to connect with new people in the world of tech,
            whether it's an actual discussions about tech, or more about video
            games and cars - get in touch!
          </span>
        </p>
        <h3 className={s.subHeading}>Stack</h3>
        <div className={s.stack}>
          <Svg className={s.icon} src='html' />
          <Svg className={s.icon} src='css' />
          <Svg className={s.icon} src='sass' />
          <Svg className={s.icon} src='javascript' />
          <Svg className={s.icon} src='typescript' />
          <Svg className={s.icon} src='react' />
        </div>
      </div>
    </motion.section>
  );
};
