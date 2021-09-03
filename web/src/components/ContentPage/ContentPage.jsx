import ImgPost from "./ImgPost/ImgPost";
import {
  ContainerContent,
  Title,
  Text,
  Author,
  ContainerPosition,
} from "./styles";
import axios from "axios";
import { useEffect, useState } from "react";
import LoadingPage from "../Ui/LoadingPage/LoadingPage";
import Button from "../Ui/Button/Button";

function ContentPage() {
  let id;
  const [data, setData] = useState([]);
  async function getApi() {
    const response = await axios.get(
      "http://localhost:3004/posts?_order=desc&_sort=id"
    );
    setData(response.data);
  }

  useEffect(() => {
    getApi();
  }, []);

  // if (data.length === 0) {
  //   return <LoadingPage>Carregando...</LoadingPage>
  // } 
  if(!data.length) {
    return (
      <ContainerContent>
        <Title>Poste Algo</Title>
      </ContainerContent>
    );
  }
  return (
    <>
      {data.map((data, key) => {
        return (
          <ContainerContent key={key}>
            {/* <button type="button">{data.id}</button> DELETE Method */}
            <Title>{data.title}</Title>
            <ImgPost src={data.image} alt={data.title} />
            <Text>{data.description}</Text>
            
            <Author>Autor: {data.author}</Author>
            <ContainerPosition>
              <Button component="a" href={`show/${data.id}`}>
                Continue Lendo...
              </Button>
            </ContainerPosition>
          </ContainerContent>
        );
      })}
    </>
  );
}

export default ContentPage;
