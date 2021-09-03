import React from 'react';
import Imgheader from './Imgheader/Imgheader';
import HeaderTitle from './Title/Title';
import { HeaderStyle } from './styles';
import Button  from '../Ui/Button/Button';


function Header() {
  return (
    <HeaderStyle>
      <Imgheader/>
      <Button component="a" href="post/create">+ Nova Postagem</Button>
      <HeaderTitle/>
    </HeaderStyle>
  )
}

export default Header;