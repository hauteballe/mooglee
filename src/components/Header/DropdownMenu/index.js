import React from 'react';
import { default as moduleStyles } from './styles.module.css';
import usePresenter from './hooks/usePresenter';
import OutsideClickListener from './OutsideClickListener';

const DropdownMenu = ({ anchorElement, isOpen, onClose }) => {
  const { onClick, setPopperElement, styles, attributes } = usePresenter({
    anchorElement,
  });

  return (
    <div>
      {isOpen ? (
        <OutsideClickListener onClick={onClose}>
          <div
            ref={setPopperElement}
            {...attributes.popper}
            style={styles.popper}
          >
            <div className={moduleStyles.popper}>
              <button className={moduleStyles.button} onClick={onClick}>
                Выйти
              </button>
            </div>
          </div>
        </OutsideClickListener>
      ) : null}
    </div>
  );
};

export default DropdownMenu;
