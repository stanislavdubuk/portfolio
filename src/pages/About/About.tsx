import * as React from 'react';

import s from './About.module.scss';

interface AboutProps {
  reference: (instance: HTMLElement | null) => void;
}

export const About = ({ reference }: AboutProps) => {
  return (
    <section className={s.root} ref={reference}>
      <div className={s.content}>
        <div className={s.about}></div>
      </div>
    </section>
  );
};
