import * as React from 'react';

import { Card } from '../../components/Card';
import { PROJECTS } from '../../lib/constants';

import s from './Projects.module.scss';

interface ProjectsProps {
  reference: (instance: HTMLElement | null) => void;
}

export const Projects = ({ reference }: ProjectsProps) => {
  const cardContainerRef = React.useRef<HTMLDivElement | null>(null);

  const projects = PROJECTS.map((project) => ({
    project,
    ref: React.createRef() as React.LegacyRef<HTMLDivElement>,
  }));

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (cardContainerRef.current)
      for (const card of cardContainerRef.current
        .children as HTMLCollectionOf<HTMLElement>) {
        const rect = card?.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        card?.style.setProperty('--mouse-x', `${x}px`);
        card?.style.setProperty('--mouse-y', `${y}px`);

        const borderDiv = card?.children[0] as HTMLElement;
        borderDiv.style.setProperty('opacity', '1');
      }
  };

  return (
    <section id='projects' className={s.root} ref={reference}>
      <h1 className={s.heading}>01.</h1>
      <div className={s.content}>
        <div
          className={s.cardContainer}
          ref={cardContainerRef}
          onMouseMove={(event) => handleMouseMove(event)}
        >
          {projects.map((project) => (
            <Card
              key={project.project.id}
              project={project.project}
              reference={project.ref}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
