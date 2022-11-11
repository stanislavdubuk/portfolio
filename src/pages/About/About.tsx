import * as React from 'react';

import s from './About.module.scss';

interface AboutProps {
  reference: (instance: HTMLElement | null) => void;
}

export const About = ({ reference }: AboutProps) => {
  return (
    <section id='about' className={s.root} ref={reference}>
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
        <div className={s.stack}></div>
      </div>
    </section>
  );
};
