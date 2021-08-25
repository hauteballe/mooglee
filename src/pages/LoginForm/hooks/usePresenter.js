import { FORM_ERROR } from 'final-form';
import { useDispatch } from 'react-redux';
import { add } from '../../../redux/features/addUser/userSlice';
import { useHistory } from 'react-router-dom';

const validateLength = (value, minLength, maxLength, errorMessage) => {
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

const validateRequired = (value, errorMessage) => {
  const defaultErrorMessage = 'Required';
  if (!value) {
    return errorMessage || defaultErrorMessage;
  }
};

const validateRegex = (value, regex, errorMessage) => {
  const defaultErrorMessage = 'Invalid input';
  if (regex && !regex.test(value)) {
    return errorMessage || defaultErrorMessage;
  }
};

const usePresenter = () => {
  const regex = new RegExp('^(?=.*[a-zа-я])(?=.*[A-ZА-Я])(?=.*[0-9])');
  const dispatch = useDispatch();
  const history = useHistory();

  const redirectToHomepage = () => {
    history.push('/mooglee');
  };

  const validateUsername = (username) => {
    let error =
      validateRequired(username) ||
      validateLength(username, 3, 30, 'Invalid username length');
    return error;
  };

  const validatePassword = (password) => {
    let error =
      validateRequired(password) ||
      validateLength(password, 6, 30, 'Invalid password length') ||
      validateRegex(
        password,
        regex,
        'Password should contain at least one number, one uppercase letter and one lowercase letter'
      );
    return error;
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = async (values) => {
    await sleep(3000);
    if (values.password !== 'theBestBob1') {
      return { [FORM_ERROR]: 'Пользователь или пароль неверный' };
    } else {
      console.log('success!');
      dispatch(add(values.username));
      redirectToHomepage();
    }
  };

  const validate = (values) => {
    const errors = {};
    let usernameError = validateUsername(values.username);
    if (usernameError) {
      errors.username = usernameError;
    }
    let passwordError = validatePassword(values.password);
    if (passwordError) {
      errors.password = passwordError;
    }
    return errors;
  };

  return { onSubmit, validate };
};

export default usePresenter;
