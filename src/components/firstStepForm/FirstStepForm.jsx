import * as React from 'react';
import { memo } from 'react';
import Field from '../field/Field';

const FirstStepForm = (props) => {
  const { values, errors, handleChange, validate } = props;

  return (
    <>
      <Field
        label='Логин'
        name='login'
        value={values.login}
        error={errors.login}
        onChange={handleChange}
        validate={validate}
      />
      <Field
        label='Пароль'
        name='password'
        value={values.password}
        type='password'
        error={errors.password}
        onChange={handleChange}
        validate={validate}
      />
      <Field
        label='Номер телефона'
        name='phoneNumber'
        value={values.phoneNumber}
        type='tel'
        error={errors.phoneNumber}
        onChange={handleChange}
        validate={validate}
        message='на случай, если вы забудете свой пароль'
      />
    </>
  );
}

export default memo(FirstStepForm);