import * as React from 'react';

import { Svg } from '../ui/Svg';
import { Button } from '../ui/Button';

import { scroll } from '../../lib/utils';
import { EButtonSizes, ESections } from '../../lib/enums';

import s from './Header.module.scss';
import { Navigation } from '../Navigation';
import { MobileNavigation } from '../MobileNavigation';

export const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  const handleScroll = (sectionId: ESections) => scroll(sectionId);

  const handleToggleMenu = () => setShowMobileMenu(!showMobileMenu);
  return (
    <header className={s.root}>
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
    </header>
  );
};
