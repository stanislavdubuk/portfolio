import * as React from 'react';
import cn from 'classnames';

import s from './Container.module.scss';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ className, children }: ContainerProps) => (
  <div className={cn(s.root, className)}>{children}</div>
);
