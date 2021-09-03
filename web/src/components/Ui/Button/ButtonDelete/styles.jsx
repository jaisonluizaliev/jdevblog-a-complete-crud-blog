import styled from "styled-components";

export const ButtonsContainer = styled.div`
  position: relative;
  height: 70px;
`;

export const ButtonEditStyled = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #286090;
  border-radius: 4px;
  height: 35px;
  width: 110px;
  font-size: 14px;
  color: #286090;
  position: absolute;
  left: 15px;
  cursor: pointer;
`;

export const ButtonDeleteStyled = styled.button`
  background: red;
  border: 1px solid black;
  border-radius: 4px;
  height: 35px;
  width: 110px;
  font-size: 14px;
  color:white;
  position: absolute;
  right: 15px;
  cursor: pointer;
`;
