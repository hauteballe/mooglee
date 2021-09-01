import { useSelector } from 'react-redux';

const usePresenter = () => {
  const user = useSelector((state) => state.user);
  let isContentAvailable = Boolean(user.username);

  return { isContentAvailable };
};

export default usePresenter;
