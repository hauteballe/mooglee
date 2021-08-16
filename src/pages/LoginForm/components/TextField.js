import React from 'react';

const TextField = (props) => {
  const { id, input, meta, ...rest } = props;

  return (
    <div>
      <input id={id} {...rest} {...input} />
      {meta.error && meta.submitFailed && <span>{meta.error}</span>}
    </div>
  );
};

export default TextField;
