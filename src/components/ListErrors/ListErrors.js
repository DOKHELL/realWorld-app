import React from 'react';

const ListErrors = ({errors}) => {
  return (
    <ul className="error-messages">
      {errors && Object.keys(errors).map((key, i) => (
        <li key={i}>{key} {errors[key]}</li>
      ))}
    </ul>
  );
};

export default ListErrors;
