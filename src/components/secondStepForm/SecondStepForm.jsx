import * as React from 'react';
import { memo } from 'react';
import Field from '../field/Field';

const SecondStepForm = (props) => {
  const { values, errors, handleChange, validate } = props;
  
  return (
    <>
      <Field
        label='Имя'
        name='firstName'
        value={values.firstName}
        error={errors.firstName}
        onChange={handleChange}
        validate={validate}
      />
      <Field
        label='Фамилия'
        name='lastName'
        value={values.lastName}
        error={errors.lastName}
        onChange={handleChange}
        validate={validate}
      />
      <Field
        label='E-mail'
        name='email'
        value={values.email}
        type='email'
        error={errors.email}
        onChange={handleChange}
        validate={validate}
        message='будем присылать крутые открытки по праздникам'
      />
    </>
  );
}

export default memo(SecondStepForm);