import * as React from 'react';
import { memo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './styles.scss';

const Field = (props) => {
  const { label, name, type, value, onChange, validate, error, className, message } = props;
  const classes = cn('field', className);
 
  return (
    <label className={classes}>
      {label && <span className="field__label">{label}:</span>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={validate}
        onFocus={validate}
        className='field__input field__input_dark'
      />
      {error && <span className='field__info field__info_error'>{error}</span>}
      {message && !error && <span className='field__info field__info_message'>{message}</span>}
    </label>
  );
};

Field.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'password', 'email', 'tel']),
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  validate: PropTypes.func,
  error: PropTypes.string,
  message: PropTypes.string,
};

Field.defaultProps = {
  type: 'text',
  value: '',
};

export default memo(Field);