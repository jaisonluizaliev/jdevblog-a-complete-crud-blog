import React from 'react';
import { Label, Paragraph } from './styles';

function InputText({component:Component, children, id, onChange, name, value, ...restProps}) {
  return (
    <>
      <Label htmlFor={!id ? name : id}>
        <Paragraph>{children}</Paragraph>
        <Component onChange={onChange} id={id} name={name} value={value} {...restProps} />
      </Label>
    </>
  );
}

export default InputText;