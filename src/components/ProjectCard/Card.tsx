import * as React from 'react';

import s from './Card.module.scss';

interface CardProps {
  reference: React.LegacyRef<HTMLDivElement>;
}

export const Card = ({ reference }: CardProps) => {
  return (
    <div className={s.root} ref={reference}>
      <div className={s.border}></div>
      <div className={s.content}></div>
    </div>
  );
};
