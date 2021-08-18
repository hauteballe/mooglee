import { FORM_ERROR } from 'final-form';

const usePresenter = () => {
  const regex = new RegExp('^(?=.*[a-zа-я])(?=.*[A-ZА-Я])(?=.*[0-9])');

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = async (values) => {
    await sleep(3000);
    if (values.username !== 'Bob' || values.password !== 'theBestBob1') {
      return { [FORM_ERROR]: 'Пользователь или пароль неверный' };
    } else {
      console.log('success!');
    }
  };

  const validate = (values) => {
    const errors = {};
    if (
      !values.username ||
      (values.username &&
        (values.username.length < 3 || values.username.length > 30))
    ) {
      errors.username = 'Invalid username length';
    }
    if (
      values.password &&
      values.password.length >= 6 &&
      values.password.length <= 30
    ) {
      if (values.password && !regex.test(values.password)) {
        errors.password = 'Invalid password';
      }
    } else {
      errors.password = 'Invalid password length';
    }

    return errors;
  };

  return { onSubmit, validate };
};

export default usePresenter;
