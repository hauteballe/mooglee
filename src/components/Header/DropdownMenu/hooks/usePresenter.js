import { useState } from 'react';
import { usePopper } from 'react-popper';

import { useDispatch } from 'react-redux';
import { remove } from '../../../../redux/features/addUser/userSlice';
import useOutsideClick from './useOutsideClick';

const usePresenter = ({ anchorElement, onClose }) => {
  const dispatch = useDispatch();

  const onClick = (values) => {
    localStorage.removeItem('username');
    dispatch(remove(values.username));
  };

  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(anchorElement, popperElement);

  useOutsideClick(anchorElement, popperElement, onClose);
  return { onClick, setPopperElement, styles, attributes, anchorElement };
};

export default usePresenter;
