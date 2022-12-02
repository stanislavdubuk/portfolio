import * as React from 'react';
import { motion } from 'framer-motion';
import cn from 'classnames';

import { EButtonSizes } from '../../../lib/enums';

import s from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size?: EButtonSizes;
  type?: 'button' | 'submit' | 'reset';
  motionOptions?: {
    initialOpacity?: number;
    transform?: string;
    opacity?: number;
    viewport?: {
      once?: boolean;
    };
    delay?: number;
  };
}

export const Button = ({
  children,
  className,
  onClick,
  size,
  type,
  motionOptions,
}: ButtonProps) => {
  if (motionOptions) {
    const { initialOpacity, delay, opacity, transform } = motionOptions;

    return (
      <motion.button
        className={cn(s.root, className, s[`size_${size}`])}
        onClick={onClick}
        initial={{ opacity: initialOpacity, transform }}
        whileInView={{ opacity }}
        viewport={{ once: true }}
        transition={{ delay }}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <button
      type={type}
      className={cn(s.root, className, s[`size_${size}`])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
