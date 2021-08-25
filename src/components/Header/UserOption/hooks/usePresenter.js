import { useSelector } from 'react-redux';

const usePresenter = () => {
  const user = useSelector((state) => state.user);
  let userAbbreviation;
  if (user.username) {
    userAbbreviation = user.username.toUpperCase()[0];
  }

  return { userAbbreviation };
};

export default usePresenter;
