import React from 'react';
import { default as moduleStyles } from './styles.module.css';
import usePresenter from './hooks/usePresenter';

const DropdownMenu = ({ anchorElement, isOpen, onClose }) => {
  const { onClick, setPopperElement, styles, attributes } = usePresenter({
    anchorElement,
    onClose,
  });

  return (
    <div ref={setPopperElement} {...attributes.popper} style={styles.popper}>
      {isOpen ? (
        <div>
          <div className={moduleStyles.popper}>
            <button className={moduleStyles.button} onClick={onClick}>
              Выйти
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default DropdownMenu;
