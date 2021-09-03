import axios from "axios";
import { useEffect, useState } from "react";
import {
  ContainerContent,
  Title,
  Author,
} from "../../components/ContentPage/styles";
import ImgPost from "../../components/ContentPage/ImgPost/ImgPost";
import LoadingPage from "../../components/Ui/LoadingPage/LoadingPage";
import Container from "../../components/Ui/Container/Container";
import Button from "../../components/Ui/Button/Button";
import { HeaderStyle } from "../../components/Header/styles";
import Imgheader from "../../components/Header/Imgheader/Imgheader";
import HeaderTitle from "../../components/Header/Title/Title";
import Link from "next/link";
import { Text } from "./styles";
import ButtonDelete from "../../components/Ui/Button/ButtonDelete/ButtonDelete";

const PagesShow = ({ pid }) => {
  const [uniqueData, setUniqueData] = useState(null);

  async function getApi() {
    try {
      const { data } = await axios.get(`http://localhost:3004/posts/${pid}`);
      setUniqueData(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(async () => {
    await getApi();
  }, pid);

  if (uniqueData === null) {
    return <LoadingPage>...Carregando</LoadingPage>;
  }

  return (
    <Container>
      <HeaderStyle>
        <Imgheader />
        <Button component={Link} href="/">
          Home
        </Button>
        <HeaderTitle />
      </HeaderStyle>
      <ButtonDelete />
      <ContainerContent>
        <Title>{uniqueData.title}</Title>
        <ImgPost src={uniqueData.image} />
        <Text>{uniqueData.description}</Text>
        <Author>Autor: {uniqueData.author}</Author>
      </ContainerContent>
    </Container>
  );
};

export default PagesShow;
