import * as React from 'react';
import { motion } from 'framer-motion';
import cn from 'classnames';

import { Svg } from '../ui/Svg';
import { EMAIL } from '../../lib/constants';

import s from './SideLink.module.scss';

interface SideLinkProps {
  side: 'left' | 'right';
}

export const SideLink = ({ side }: SideLinkProps) => {
  const [copied, setShowCopied] = React.useState(false);

  const handleCopyToClipboard = () => {
    setShowCopied(true);

    navigator.clipboard.writeText(EMAIL);
  };

  React.useEffect(() => {
    setTimeout(() => {
      setShowCopied(false);
    }, 1000);
  }, [copied]);

  if (side === 'left')
    return (
      <motion.div
        className={cn(s.root, s.left)}
        initial={{ left: 0, opacity: 0 }}
        whileInView={{ left: 50, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2 }}
      >
        <div className={s.container}>
          <a
            href='https://github.com/stanislavdubuk'
            target='_blank'
            rel='noreferrer'
          >
            <Svg
              className={cn(s.icon, s.link)}
              src='github'
              width={32}
              height={32}
            />
          </a>
          <Svg className={s.icon} src='git-branch' width={20} height={20} />
          <Svg className={s.icon} src='git-compare' width={20} height={20} />
          <Svg className={s.icon} src='git-merge' width={20} height={20} />
          <Svg className={s.icon} src='git-network' width={20} height={20} />
          <Svg
            className={s.icon}
            src='git-pull-request'
            width={20}
            height={20}
          />
        </div>
      </motion.div>
    );

  return (
    <motion.div
      className={cn(s.root, s.right)}
      initial={{ right: 0, opacity: 0 }}
      whileInView={{ right: 50, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 2 }}
    >
      <div className={s.container}>
        <Svg
          className={cn(s.clipboard, { [s.copied]: copied })}
          src='clipboard'
          width={24}
          height={24}
        />
        <span className={s.email} onClick={handleCopyToClipboard}>
          {EMAIL}
        </span>
      </div>
    </motion.div>
  );
};
