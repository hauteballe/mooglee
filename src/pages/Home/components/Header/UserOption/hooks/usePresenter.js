import { useSelector } from 'react-redux';

const usePresenter = () => {
  const user = useSelector((state) => state.user);

  return { user };
};

export default usePresenter;
