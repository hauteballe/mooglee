import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const usePresenter = () => {
  const anchorElement = React.useRef();

  const user = useSelector((state) => state.user);
  let userAbbreviation;
  if (user.username) {
    userAbbreviation = user.username.toUpperCase()[0];
  }

  const [isOpen, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  const onClick = () => {
    setOpen(!isOpen);
  };

  return { userAbbreviation, onClick, anchorElement, isOpen, onClose };
};

export default usePresenter;
