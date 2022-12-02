import * as React from 'react';
import cn from 'classnames';

import { Button } from '../ui/Button';
import { Svg } from '../ui/Svg';

import { encode } from '../../lib/utils';
import { EButtonSizes } from '../../lib/enums';
import { DEFAULT_FORM_QUERY } from '../../lib/constants';

import s from './Form.module.scss';

export const Form = () => {
  const [messageSent, setMessageSent] = React.useState(false);
  const [formData, setFormData] = React.useState(DEFAULT_FORM_QUERY);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formData }),
    })
      .then(() => setMessageSent(true))
      .catch((error) => alert(error));

    setFormData(DEFAULT_FORM_QUERY);
  };

  React.useEffect(() => {
    setTimeout(() => {
      setMessageSent(false);
    }, 2000);
  }, [messageSent]);

  const { name, email, message } = formData;
  return (
    <form
      data-netlify='true'
      className={s.root}
      method='post'
      autoComplete='off'
      name='contact'
      onSubmit={handleSubmit}
    >
      <input type='hidden' name='form-name' value='contact' />
      <div className={s.input}>
        <label>Name</label>
        <input
          type='text'
          name='name'
          value={name}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className={s.input}>
        <label>Email</label>
        <input
          type='email'
          name='email'
          value={email}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className={s.input}>
        <label>Message</label>
        <textarea
          cols={0}
          rows={7}
          name='message'
          value={message}
          onChange={(e) => handleChange(e)}
        />
      </div>

      <Button type='submit' className={s.button} size={EButtonSizes.Large}>
        Send message
        <Svg
          className={cn(s.icon, { [s.showIcon]: messageSent })}
          src='checkmark'
        />
      </Button>
    </form>
  );
};
