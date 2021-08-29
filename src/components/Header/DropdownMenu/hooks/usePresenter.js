import { useState } from 'react';
import { usePopper } from 'react-popper';

import { useDispatch } from 'react-redux';
import { remove } from '../../../../redux/features/addUser/userSlice';

const usePresenter = ({ anchorElement }) => {
  const dispatch = useDispatch();

  const onClick = (values) => {
    dispatch(remove(values.username));
  };
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(anchorElement, popperElement);

  return { onClick, setPopperElement, styles, attributes, anchorElement };
};

export default usePresenter;
