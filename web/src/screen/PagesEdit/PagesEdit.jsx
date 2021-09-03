import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "../../components/Ui/Container/styles";
import Button from "../../components/Ui/Button/Button";
import { ContainerContent } from "../../components/ContentPage/styles";
import { Title } from "../../components/ContentPage/styles";
import InputText from "../../components/Inputs/InputText/InputText";
import { FormStyled } from "../../components/Inputs/styles";
import { useRouter } from "next/dist/client/router";

function PagesEdit({ eid }) {
  const [hasData, setHasData] = useState({});
  const router = useRouter();

  async function getApi() {
    try {
      const { data } = await axios.get("http://localhost:3004/posts");

      data.filter((arr) => {
        if (arr.id === eid) {
          setHasData(arr);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  function onChange(ev) {
    const { name, value } = ev.target;

    setHasData({ ...hasData, [name]: value });
  }

  async function editMessage(ev) {
    ev.preventDefault();
    try {
      if (eid) {
        await axios.put(`http://localhost:3004/posts/${eid}`, hasData);
      } else {
        await axios.post("http://localhost:3004/posts", hasData);
      }
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getApi();
  }, [eid]);

  return (
    <Container>
      <Button component="a" href="/">
        Home
      </Button>
      <ContainerContent>
        <Title>Editar Postagem</Title>
        <FormStyled onSubmit={editMessage}>
          <InputText
            component="input"
            name="title"
            id="title"
            value={hasData.title}
            onChange={onChange}
          >
            Titulo
          </InputText>
          <InputText
            component="textarea"
            name="description"
            id="description"
            value={hasData.description}
            onChange={onChange}
          >
            Descrição
          </InputText>
          <InputText
            component="input"
            name="image"
            id="image"
            value={hasData.image}
            onChange={onChange}
          >
            Image (URL)
          </InputText>
          <InputText
            component="input"
            name="author"
            id="author"
            value={hasData.author}
            onChange={onChange}
          >
            Author
          </InputText>
          <Button className="btn-save" component="button" type="submit">
            Salvar
          </Button>
        </FormStyled>
      </ContainerContent>
    </Container>
  );
}

export default PagesEdit;
