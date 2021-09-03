import React from 'react';
import axios from 'axios'
import { ButtonsContainer, ButtonEditStyled, ButtonDeleteStyled } from "./styles";
import { useRouter } from 'next/router';

function ButtonDelete() {
  const router = useRouter()
  const { id } = router.query

  async function onDelete() {
    try {
      await axios.delete(`http://localhost:3004/posts/${id}`);
      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <ButtonsContainer>
      <ButtonEditStyled href={`/edit/${id}`}>Editar</ButtonEditStyled>
      <ButtonDeleteStyled onClick={onDelete} type="button">Deletar</ButtonDeleteStyled>
    </ButtonsContainer>
  );
} 

export default ButtonDelete;