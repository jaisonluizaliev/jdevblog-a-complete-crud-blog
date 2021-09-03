import React from 'react';
import { ButtonStyle } from './styles';

function Button({ component: Component, children, className, ...restProps}) {
  return (
    <ButtonStyle>
      <Component className={className} {...restProps}>{children}</Component>
    </ButtonStyle>
  );
}

export default Button;