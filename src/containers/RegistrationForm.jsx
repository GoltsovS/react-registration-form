import * as React from 'react';
import { useState, useCallback } from 'react';
import cn from 'classnames';

import FirstStepForm from '../components/firstStepForm/FirstStepForm';
import SecondStepForm from '../components/secondStepForm/SecondStepForm';
import Form from '../components/form/Form';
import Button from '../components/button/Button';
import { fieldValidation, passwordValidation, phoneValidation, emailValidation } from '../helpers/validation';

const initialValues = {
  login: '',
  password: '',
  phoneNumber: '',
  firstName: '',
  lastName: '',
  email: '',
};

const firstStepFields = ['login', 'password', 'phoneNumber'];
const secondStepFields = ['firstName', 'lastName', 'email'];

const validate = {
  login: fieldValidation,
  password: passwordValidation,
  phoneNumber: phoneValidation,
  firstName: fieldValidation,
  lastName: fieldValidation,
  email: emailValidation,
};

const RegistrationForm = () => {
  const [step, setStep] = useState(0);
  const [stepsValidity, setStepsValidity] = useState({ 0: false, 1: false });
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  
  const currentFields = step === 0 ? firstStepFields : secondStepFields;
  const formClasses = cn({ 'form_second': step === 1 });

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    console.log(values);
  }, [values]);

  const handleChange = useCallback((event) => {
    const { value, name } = event.target;
    setValues((prev) => ({ ...prev, [name]: value.trim()}));
  }, []);

  const isValidStep = (errors, values, fields) => fields
    .every((field) => values[field] !== '' && !errors[field]);

  const validateStep = useCallback((event) => {
    const { value, name } = event.target;
    const error = validate[name](value);
    const { [name]: removedError, ...rest } = errors;
    const newErrors = { ...rest, ...(error && { [name]: error }) };

    setErrors(newErrors);
    setStepsValidity((prev) => {
      const isValid = isValidStep(newErrors, values, currentFields);
      return { ...prev, ...{ [step]: isValid }};
    });
  }, [stepsValidity, errors]);

  const toggleStep = useCallback(() => setStep(+!step), [step]);

  return (
    <Form className={formClasses} onSubmit={handleSubmit} title='Регистрация'>
      <>{step === 0
        ? <FirstStepForm
          values={values}
          errors={errors}
          validate={validateStep}
          handleChange={handleChange}
        />
        : <SecondStepForm
          values={values}
          errors={errors}
          validate={validateStep}
          handleChange={handleChange}
        />}
        {step === 0
        ? <Button
          className='button_purple'
          text='Продолжить'
          disabled={!stepsValidity[0]}
          onClick={toggleStep}
        /> : <>
        <Button
          className='button_purple form__button'
          text='Зарегистрироваться'
          type='submit'
          disabled={!stepsValidity[1]}
        />
        <Button
          className='button-link form__link'
          type='submit'
          text='< Назад'
          onClick={toggleStep}
        />
        </>}
      </>
    </Form>
  );
};

export default RegistrationForm;