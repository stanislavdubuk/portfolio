import * as React from 'react';

import s from './About.module.scss';

interface AboutProps {
  reference: any;
}

export const About = ({ reference }: AboutProps) => {
  return (
    <div className={s.root} ref={reference}>
      <h1>ABOUT</h1>
    </div>
  );
};
