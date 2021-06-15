import React, { memo } from 'react';
import './style.css';

const Button = ({ children, ...otherProps }) => {
  console.log('Button component');
  return <button {...otherProps}>{children}</button>;
};

export default memo(Button);
