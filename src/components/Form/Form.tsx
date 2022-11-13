import * as React from 'react';

import { Button } from '../ui/Button';

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
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formData }),
    })
      .then(() => setMessageSent(true))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  React.useEffect(() => {
    setTimeout(() => {
      setMessageSent(false);
    }, 2000);
  }, [messageSent]);

  const { name, email, message } = formData;
  return (
    <form
      className={s.root}
      onSubmit={(e) => handleSubmit(e)}
      autoComplete='off'
    >
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
      <Button className={s.button} size={EButtonSizes.Large}>
        Send message
      </Button>
    </form>
  );
};
