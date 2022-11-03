import * as React from 'react';

import s from './Projects.module.scss';

interface ProjectsProps {
  reference: any;
}

export const Projects = ({ reference }: ProjectsProps) => {
  return (
    <div className={s.root} ref={reference}>
      <h1>PROJECTS</h1>
    </div>
  );
};
