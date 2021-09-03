import styled from 'styled-components';

export const ContainerContent = styled.div`
  max-width: 700px;
  margin: 1rem auto;
  border-radius: 4px;
  background: #cecece;
  position: relative;
  padding: 0px 0px 40px 0px;
`;

export const Title = styled.h1`
    text-align: center;
    text-transform: capitalize;
    font-weight: 500;
    margin-bottom: 1rem;
    padding-top: 1rem;
    font-size: 19px;
  `


export const Text = styled.p`
  max-width: 90%;
  width: 250px;
  margin: 10px auto;
  height: 25px;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 90%;
`;

export const Author = styled.strong`
  max-width: 90%;
  width: 400px;
  margin: 1rem auto;
  display: block;
  padding-bottom: 0.9rem;
  font-size: 91%;
`;

export const ContainerPosition = styled.div`
  position: absolute;
  bottom: 49px;
  right: 100px;
  font-size: 90%;
`

