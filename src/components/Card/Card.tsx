import * as React from 'react';

import { TProject } from '../../lib/constants';

import s from './Card.module.scss';

interface CardProps {
  project: TProject;
  reference: React.LegacyRef<HTMLDivElement>;
}

export const Card = ({ project, reference }: CardProps) => {
  const { title, description, stack, image } = project;

  return (
    <div className={s.root} ref={reference}>
      <div className={s.border}></div>
      <div className={s.content}>
        <img
          className={s.image}
          src={`/images/${image}.png`}
          alt='Project background'
        />
        <div className={s.container}>
          <h4 className={s.title}>{title}</h4>
          <p className={s.description}>{description}</p>
          <div className={s.stack}>
            {stack.map((tech) => (
              <div key={tech} className={s.tech}>
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
