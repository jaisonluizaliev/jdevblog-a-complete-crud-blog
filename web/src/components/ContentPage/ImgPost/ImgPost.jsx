import React from 'react';
import { ImgPostStyled } from "./styles";

function ImgPost({src, alt}) {
  return <ImgPostStyled src={src} alt={alt}/>;
}

export default ImgPost;