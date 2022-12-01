import * as React from 'react';
import { motion } from 'framer-motion';

import { Svg } from '../ui/Svg';
import { Button } from '../ui/Button';

import { scroll } from '../../lib/utils';
import { EButtonSizes, ESections } from '../../lib/enums';
import { Navigation } from '../Navigation';
import { MobileNavigation } from '../MobileNavigation';

import s from './Header.module.scss';

export const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  const handleScroll = (sectionId: ESections) => scroll(sectionId);

  const handleToggleMenu = () => setShowMobileMenu(!showMobileMenu);
  return (
    <motion.header
      className={s.root}
      initial={{ translateY: -100 }}
      whileInView={{ translateY: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 2 }}
    >
      <nav className={s.nav}>
        <Svg
          className={s.icon}
          src='logo'
          width={60}
          height={60}
          onClick={() => handleScroll(ESections.Hero)}
        />

        <Navigation handleScroll={handleScroll} />

        <Button className={s.resume} size={EButtonSizes.Medium}>
          Resume
        </Button>
        <div className={s.burger} onClick={handleToggleMenu}>
          <Svg className={s.icon} src='menu' width={40} height={40} />
        </div>
      </nav>
      <MobileNavigation
        showMobileNavigation={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
        handleScroll={handleScroll}
      />
    </motion.header>
  );
};
