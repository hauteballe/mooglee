import React from 'react';
import { Form, Field } from 'react-final-form';
import { FORM_ERROR } from 'final-form';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';
import TextField from './components/TextField';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(3000);
  if (values.username !== 'Bob' || values.password !== 'theBestBob1') {
    return { [FORM_ERROR]: 'Пользователь или пароль неверный' };
  } else {
    console.log('success!');
  }
};

const LoginForm = () => {
  return (
    <Form
      onSubmit={onSubmit}
      validate={(values) => {
        const errors = {};
        if (!values.username) {
          errors.username = 'Required';
        }
        if (!values.password) {
          errors.password = 'Required';
        }
        if (
          values.username &&
          (values.username.length < 3 || values.username.length > 30)
        ) {
          errors.username = 'Invalid username length';
        }
        if (
          values.password &&
          (values.password.length < 6 || values.password.length > 30)
        ) {
          errors.password = 'invalid password length';
        }

        const regex = new RegExp('^(?=.*[a-zа-я])(?=.*[A-ZА-Я])(?=.*[0-9])');
        if (values.password && !regex.test(values.password)) {
          errors.password = 'Invalid password';
        }
        return errors;
      }}
      render={(renderProps) => {
        const { handleSubmit, submitting, submitErrors } = renderProps;

        return (
          <div>
            <Link to='/mooglee' className={styles.homeButton}>
              Home
            </Link>
            <div className={styles.formWrapper}>
              <form onSubmit={handleSubmit}>
                <Field
                  className={styles.inputField}
                  id='username'
                  name='username'
                  placeholder='username'
                  component={TextField}
                />
                <Field
                  className={styles.inputField}
                  id='password'
                  type='password'
                  name='password'
                  placeholder='password'
                  component={TextField}
                />
                <button
                  className={styles.button}
                  type='submit'
                  disabled={submitting}
                >
                  {submitting ? 'Хмм..' : 'Login'}
                </button>
                {submitErrors && submitErrors[FORM_ERROR] && (
                  <span>{submitErrors[FORM_ERROR]}</span>
                )}
              </form>
            </div>
          </div>
        );
      }}
    ></Form>
  );
};

export default LoginForm;
