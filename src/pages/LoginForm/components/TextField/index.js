import React from 'react';

const TextField = ({ id, input, meta, ...rest }) => {
  return (
    <div>
      <input id={id} {...rest} {...input} />
      {meta.error && meta.submitFailed && <span>{meta.error}</span>}
    </div>
  );
};

export default TextField;
