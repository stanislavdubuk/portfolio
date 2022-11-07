import * as React from 'react';
import { Container } from '../Container';
import { ProjectCard } from '../ProjectCard';

import s from './Projects.module.scss';

interface ProjectsProps {
  reference: (instance: HTMLElement | null) => void;
}

export const Projects = ({ reference }: ProjectsProps) => {
  const cards = [1, 2, 3, 4];

  return (
    <section className={s.root} ref={reference}>
      <Container>
        <div className={s.content}>
          <div className={s.cardContainer}>
            {cards.map((card) => (
              <ProjectCard key={card} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
