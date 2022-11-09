import * as React from 'react';
import cn from 'classnames';

import { Svg } from '../ui/Svg';

import s from './SideLink.module.scss';
import { EMAIL } from '../../lib/constants';

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
      <div className={cn(s.root, s.left)}>
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
      </div>
    );

  return (
    <div className={cn(s.root, s.right)}>
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
    </div>
  );
};
