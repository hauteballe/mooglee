import { FORM_ERROR } from 'final-form';

const validateLength = (minLength, maxLength, errorMessage) => (value) => {
  const defaultErrorMessage = 'Invalid input length';
  let valid = true;
  if (minLength && value.length < minLength) {
    valid = false;
  }
  if (maxLength && value.length > maxLength) {
    valid = false;
  }
  if (!valid) {
    return errorMessage || defaultErrorMessage;
  }
};

const validateRequired = (errorMessage) => (value) => {
  const defaultErrorMessage = 'Required';
  if (!value) {
    return errorMessage || defaultErrorMessage;
  }
};

const validateRegex = (regex, errorMessage) => (value) => {
  const defaultErrorMessage = 'Invalid input';
  if (regex && !regex.test(value)) {
    return errorMessage || defaultErrorMessage;
  }
};

const usePresenter = () => {
  const regex = new RegExp('^(?=.*[a-zа-я])(?=.*[A-ZА-Я])(?=.*[0-9])');

  const validators = {
    username: [
      validateRequired(),
      validateLength(3, 30, 'Invalid username length'),
    ],
    password: [
      validateRequired(),
      validateLength(6, 30, 'Invalid password length'),
      validateRegex(
        regex,
        'Password should contain at least one number, one uppercase letter and one lowercase letter'
      ),
    ],
  };

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

    for (const [field, fieldValidators] of Object.entries(validators)) {
      for (const validate of fieldValidators) {
        let error = validate(values[field]);
        if (error) {
          errors[field] = error;
          break;
        }
      }
    }
    return errors;
  };

  return { onSubmit, validate };
};

export default usePresenter;
