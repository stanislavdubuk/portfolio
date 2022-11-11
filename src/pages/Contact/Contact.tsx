import * as React from 'react';

import s from './Contact.module.scss';

interface ContactProps {
  reference: (instance: HTMLElement | null) => void;
}

export const Contact = ({ reference }: ContactProps) => {
  return (
    <section id='contact' className={s.root} ref={reference}>
      <h1 className={s.heading}>03.</h1>
      <div className={s.content}>
        <h2>Let's Get In Touch</h2>
        <div className={s.contact}></div>
      </div>
    </section>
  );
};
