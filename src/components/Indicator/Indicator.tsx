import * as React from 'react';

import { ESections } from '../../lib/enums';

import s from './Indicator.module.scss';

interface IndicatorProps {
  activeSection: ESections;
}

export const Indicator = ({ activeSection }: IndicatorProps) => {
  const getStyles = () => {
    if (activeSection === ESections.Projects)
      return { transform: 'translateX(calc(100% - 2px))' };
    if (activeSection === ESections.About)
      return { transform: 'translateX(calc(200% - 4px))' };
  };

  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.item} style={getStyles()}></div>
      </div>
    </div>
  );
};
