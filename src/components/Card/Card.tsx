import * as React from 'react';

import { TProject } from '../../lib/constants';
import { Svg } from '../ui/Svg';

import s from './Card.module.scss';

interface CardProps {
  project: TProject;
  reference: React.LegacyRef<HTMLDivElement>;
}

export const Card = ({ project, reference }: CardProps) => {
  const { title, description, stack, image, link, live } = project;

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
          <div className={s.bottom}>
            <ul className={s.stack}>
              {stack.map((tech) => (
                <li key={tech} className={s.tech}>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={s.links}>
        <a className={s.link} href={link} target='_blank' rel='noreferrer'>
          <Svg className={s.icon} src='code' />
        </a>
        <a className={s.link} href={live} target='_blank' rel='noreferrer'>
          <Svg className={s.icon} src='link' />
        </a>
      </div>
    </div>
  );
};
