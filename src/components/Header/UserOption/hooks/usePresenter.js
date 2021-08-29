import { useState } from 'react';
import { useSelector } from 'react-redux';

const usePresenter = () => {
  const user = useSelector((state) => state.user);
  let userAbbreviation;
  if (user.username) {
    userAbbreviation = user.username.toUpperCase()[0];
  }

  const [anchorElement, setAnchorElement] = useState(null);

  const onClick = (ev) => {
    if (anchorElement) {
      setAnchorElement(null);
    } else {
      setAnchorElement(ev.target);
    }
  };

  return { userAbbreviation, onClick, anchorElement };
};

export default usePresenter;
