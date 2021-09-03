import axios from 'axios'
import { useState } from "react";
import Container from "../../components/Ui/Container/Container";
import { Title } from "../../components/ContentPage/styles";
import { ContainerContent } from "../../components/ContentPage/styles";
import Button from "../../components/Ui/Button/Button";
import InputText from "../../components/Inputs/InputText/InputText";
import { FormStyled } from "../../components/Inputs/styles";
import { useRouter } from 'next/dist/client/router';

const initialValue = {
  title: "",
  description: "",
  image: "",
  author: ""
}

function ScreenCreate() {
  const [values, setValues] = useState(initialValue)
  const router = useRouter();

  
  async function postMessage(ev) {
    ev.preventDefault();
    await axios.post("http://localhost:3004/posts", values);
    router.push('/')
  }

  function onChange(ev) {
    const { name, value } = ev.target;
    
    setValues({ ...values, [name]: value });
   
  }

  return (
    <Container>
      <Button component="a" href="/">
        Home
      </Button>
      <ContainerContent>
        <Title>Nova Postagem</Title>
        <FormStyled onSubmit={postMessage}>
          <InputText
            component="input"
            name="title"
            id="title"
            value={values.title}
            onChange={onChange}
          >
            Titulo
          </InputText>
          <InputText
            component="textarea"
            name="description"
            id="description"
            value={values.description}
            onChange={onChange}
          >
            Descrição
          </InputText>
          <InputText
            component="input"
            name="image"
            id="image"
            value={values.image}
            onChange={onChange}
          >
            Image (URL)
          </InputText>
          <InputText
            component="input"
            name="author"
            id="author"
            value={values.author}
            onChange={onChange}
          >
            Author
          </InputText>
          <Button className="btn-save" component="button" type="submit">
            Postar
          </Button>
        </FormStyled>
      </ContainerContent>
    </Container>
  );
}

export default ScreenCreate;
