import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const FormInput = ({label, type = 'text', name, register, error, className, placeholder}) => {
  const style = {
    color: "red",
    fontSize: "16px"
  };
  const fieldClasses = cn({
    'form-control': true,
    [className]: className,
    error
  });
  return (
    <fieldset className="form-group">
      {label && <label>{label}</label>}
      {type === 'textarea'
        ? <textarea className={fieldClasses} placeholder={placeholder} name={name} ref={register}/>
        : <input className={fieldClasses} placeholder={placeholder} type={type} name={name} ref={register}/>
      }
      {error && <span style={style} className="error-text">{error.message}</span>}
    </fieldset>
  );
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  register: PropTypes.func,
  error: PropTypes.object,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string
};


export default FormInput;
