import * as React from 'react';
import cn from 'classnames';

import { EButtonSizes } from '../../../lib/enums';

import s from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size?: EButtonSizes;
}

export const Button = ({ children, className, onClick, size }: ButtonProps) => {
  return (
    <button
      className={cn(s.root, className, s[`size_${size}`])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
