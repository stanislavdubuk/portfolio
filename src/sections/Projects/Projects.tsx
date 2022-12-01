import * as React from 'react';
import { motion } from 'framer-motion';

import { Card } from '../../components/Card';
import { PROJECTS, SECTION_DELAY } from '../../lib/constants';

import s from './Projects.module.scss';
import { handleMouseMove } from '../../lib/utils';

interface ProjectsProps {
  reference: (instance: HTMLElement | null) => void;
}

export const Projects = ({ reference }: ProjectsProps) => {
  const cardContainerRef = React.useRef<HTMLDivElement | null>(null);

  const projects = PROJECTS.map((project) => ({
    project,
    ref: React.createRef() as React.LegacyRef<HTMLDivElement>,
  }));

  return (
    <motion.section
      id='projects'
      className={s.root}
      ref={reference}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: SECTION_DELAY }}
    >
      <h1 className={s.heading}>01.</h1>
      <div className={s.content}>
        <div
          className={s.cardContainer}
          ref={cardContainerRef}
          onMouseMove={(event) => handleMouseMove(event, cardContainerRef)}
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
    </motion.section>
  );
};
