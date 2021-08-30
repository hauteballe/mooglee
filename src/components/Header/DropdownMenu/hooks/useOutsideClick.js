import { useEffect } from 'react';

const useOutsideClick = (anchorElement, popperElement, callback) => {
  console.log(anchorElement);

  const handleClick = (e) => {
    console.log(anchorElement, 'handleClick');
    if (
      anchorElement &&
      popperElement &&
      !anchorElement.contains(e.target) &&
      !popperElement.contains(e.target)
    ) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

export default useOutsideClick;
