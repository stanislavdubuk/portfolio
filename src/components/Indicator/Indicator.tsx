import * as React from 'react';
import { motion } from 'framer-motion';

import { ESections } from '../../lib/enums';

import s from './Indicator.module.scss';

interface IndicatorProps {
  inViewportHero: boolean;
  inViewportProjects: boolean;
  inViewportAbout: boolean;
  inViewportContact: boolean;
}

export const Indicator = ({
  inViewportHero,
  inViewportProjects,
  inViewportAbout,
  inViewportContact,
}: IndicatorProps) => {
  const [activeSection, setActiveSection] = React.useState<ESections>(
    ESections.Hero
  );

  React.useEffect(() => {
    if (inViewportHero) setActiveSection(ESections.Hero);
    if (inViewportProjects) setActiveSection(ESections.Projects);
    if (inViewportAbout) setActiveSection(ESections.About);
    if (inViewportContact) setActiveSection(ESections.Contact);
  }, [inViewportHero, inViewportProjects, inViewportAbout, inViewportContact]);

  const getStyles = () => {
    if (activeSection === ESections.Projects)
      return { transform: 'translateX(calc(100% - 2px))' };
    if (activeSection === ESections.About)
      return { transform: 'translateX(calc(200% - 4px))' };
    if (activeSection === ESections.Contact)
      return { transform: 'translateX(calc(300% - 6px))' };
  };

  return (
    <motion.div
      className={s.root}
      initial={{ bottom: 0, opacity: 0 }}
      whileInView={{ bottom: 10, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 2 }}
    >
      <div className={s.container}>
        <div className={s.item} style={getStyles()}></div>
      </div>
    </motion.div>
  );
};
