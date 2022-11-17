import * as React from 'react';
import cn from 'classnames';

import { ESections } from '../../lib/enums';

import s from './MobileNavigation.module.scss';

interface MobileNavigationProps {
  showMobileNavigation: boolean;
  handleScroll: (value: ESections) => void;
  setShowMobileMenu: (value: boolean) => void;
}

export const MobileNavigation = ({
  showMobileNavigation,
  setShowMobileMenu,
  handleScroll,
}: MobileNavigationProps) => {
  React.useEffect(() => {
    const bodyEl = document.getElementsByTagName('body')[0];

    if (showMobileNavigation) {
      bodyEl.setAttribute('style', 'overflow: hidden');
    } else {
      bodyEl.setAttribute('style', '');
    }

    return () => bodyEl.setAttribute('style', '');
  }, [showMobileNavigation]);

  const handleLinkClick = (section: ESections) => {
    setShowMobileMenu(false);

    handleScroll(section);
  };

  return (
    <div className={cn(s.root, { [s.active]: showMobileNavigation })}>
      <div
        className={s.item}
        onClick={() => handleLinkClick(ESections.Projects)}
      >
        <span className={s.number}>01.</span>
        <span>Projects</span>
      </div>
      <div className={s.item} onClick={() => handleLinkClick(ESections.About)}>
        <span className={s.number}>02.</span>
        <span>About</span>
      </div>
      <div
        className={s.item}
        onClick={() => handleLinkClick(ESections.Contact)}
      >
        <span className={s.number}>03.</span>
        <span>Contact</span>
      </div>
    </div>
  );
};
