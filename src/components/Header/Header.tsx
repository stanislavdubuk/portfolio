import * as React from 'react';
import { motion } from 'framer-motion';
import { isMobile } from 'react-device-detect';

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

  const headerInitialPosition = isMobile ? -60 : -100;

  return (
    <motion.header
      className={s.root}
      initial={{ translateY: headerInitialPosition }}
      whileInView={{ translateY: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 2 }}
    >
      <nav className={s.nav}>
        <Svg
          className={s.icon}
          src='logo'
          onClick={() => handleScroll(ESections.Hero)}
        />

        <Navigation handleScroll={handleScroll} />

        <a href='/Resume.pdf' download={true}>
          <Button className={s.resume} size={EButtonSizes.Medium}>
            Resume
          </Button>
        </a>
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
