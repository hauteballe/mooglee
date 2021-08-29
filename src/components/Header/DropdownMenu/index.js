import React from 'react';
import { default as moduleStyles } from './styles.module.css';
import usePresenter from './hooks/usePresenter';

const DropdownMenu = ({ anchorElement }) => {
  const { onClick, setPopperElement, styles, attributes } = usePresenter({
    anchorElement,
  });

  return (
    <>
      {Boolean(anchorElement) ? (
        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          <div className={moduleStyles.popper}>
            <button className={moduleStyles.button} onClick={onClick}>
              Выйти
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default DropdownMenu;
