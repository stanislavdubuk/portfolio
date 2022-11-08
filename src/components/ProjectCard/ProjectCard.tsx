import * as React from 'react';

import s from './ProjectCard.module.scss';

interface ProjectCardProps {
  reference: React.LegacyRef<HTMLDivElement>;
}

export const ProjectCard = ({ reference }: ProjectCardProps) => {
  return (
    <div className={s.root} ref={reference}>
      <div className={s.border}></div>
      <div className={s.content}></div>
    </div>
  );
};
