import React from 'react';
import PropTypes from 'prop-types';
import './Loader.scss';

const Loader = ({className}) => {

  return (
    <div className="Loader-wrapper">
      <div className={`Loader ${className || ''}`}>
        <div/>
        <div/>
        <div/>
        <div/>
      </div>
    </div>
  );
};

Loader.propTypes = {
  className: PropTypes.string,
};

export default Loader;
