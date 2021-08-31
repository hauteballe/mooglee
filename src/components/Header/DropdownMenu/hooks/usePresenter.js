import { useState } from 'react';
import { usePopper } from 'react-popper';

import { useDispatch } from 'react-redux';
import { remove } from '../../../../redux/features/addUser/userSlice';

const usePresenter = ({ anchorElement }) => {
  const dispatch = useDispatch();

  const onClick = (values) => {
    localStorage.removeItem('username');
    dispatch(remove(values.username));
  };

  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(
    anchorElement.current,
    popperElement
  );
  return { onClick, setPopperElement, styles, attributes };
};

export default usePresenter;
