import usePresenter from './hooks/usePresenter';

const OutsideClickListener = ({ children, onClick }) => {
  const { anchorElement } = usePresenter(onClick);

  return <div ref={anchorElement}>{children}</div>;
};

export default OutsideClickListener;
