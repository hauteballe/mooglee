import { useEffect, useRef } from 'react';

const usePresenter = (callback) => {
  const anchorElement = useRef(null);
  const mountedRef = useRef(false);

  const handleClick = (e) => {
    if (!mountedRef.current) return;

    if (anchorElement.current && !anchorElement.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    setTimeout(() => {
      mountedRef.current = true;
    }, 0);

    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return { anchorElement };
};

export default usePresenter;
