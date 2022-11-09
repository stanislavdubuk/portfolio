import * as React from 'react';

import s from './Layout.module.scss';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return <div className={s.root}>{children}</div>;
};
