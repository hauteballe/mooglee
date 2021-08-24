import React from 'react';
import { Form, Field } from 'react-final-form';
import { Link } from 'react-router-dom';
import { FORM_ERROR } from 'final-form';

import styles from './styles.module.css';
import TextField from './components/TextField';
import usePresenter from './hooks/usePresenter';
import Footer from '../Home/components/Footer';
import Header from '../Home/components/Header';
import Logo from '../Home/components/Logo';

const LoginForm = () => {
  const { onSubmit, validate } = usePresenter();
  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={(renderProps) => {
        const { handleSubmit, submitting, submitErrors } = renderProps;

        return (
          <div className={styles.pageWrapper}>
            <div className={styles.headerWrapper}>
              <Link to='/mooglee'>
                <div className={styles.headerLogo}>
                  <Logo size='small'></Logo>
                </div>
              </Link>
              <Header />
            </div>
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
            <Footer />
          </div>
        );
      }}
    ></Form>
  );
};

export default LoginForm;
