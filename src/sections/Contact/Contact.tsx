import * as React from 'react';
import { motion } from 'framer-motion';

import { Svg } from '../../components/ui/Svg';
import { Form } from '../../components/Form';

import { EMAIL, SECTION_DELAY } from '../../lib/constants';

import s from './Contact.module.scss';

interface ContactProps {
  reference: (instance: HTMLElement | null) => void;
}

export const Contact = ({ reference }: ContactProps) => {
  return (
    <motion.section
      id='contact'
      className={s.root}
      ref={reference}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: SECTION_DELAY }}
    >
      <h1 className={s.heading}>03.</h1>
      <div className={s.content}>
        <h2>Let's Get In Touch</h2>
        <div className={s.contact}>
          <div className={s.links}>
            <div className={s.link}>
              <Svg className={s.icon} src='github' />
              <a
                href='https://github.com/stanislavdubuk'
                target='_blank'
                rel='noreferrer'
              >
                https://github.com/stanislavdubuk
              </a>
            </div>
            <div className={s.link}>
              <Svg className={s.icon} src='email' />
              <span>{EMAIL}</span>
            </div>
          </div>

          <Form />
        </div>
      </div>
    </motion.section>
  );
};
