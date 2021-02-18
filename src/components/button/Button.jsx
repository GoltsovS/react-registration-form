import * as React from 'react';
import { memo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './styles.scss';

const Button = ({ type, onClick, disabled, text, className }) => {
  const classes = cn('button', className);
  return (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={classes}
  >{text}</button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']),
  text: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  text: '',
  disabled: false,
};

export default memo(Button);