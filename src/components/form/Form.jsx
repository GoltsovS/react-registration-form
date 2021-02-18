
import * as React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './styles.scss';

const Form = (props) => {
  const {className, children, title, onSubmit } = props;
  const formClasses = cn('form', className);

  return (
    <form className={formClasses} onSubmit={onSubmit}>
      {title && <h1 className='form__title'>{title}</h1>}
      {children}
    </form>
)};

Form.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element,
  title: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default Form;