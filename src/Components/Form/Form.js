import { useState } from "react";
import Button from "../Button";
import { Lists } from "../Lists/Lists";
import TextField from "../TextField";
import "./Form.css";

export const Form = (props) => {

  const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'DevOps',
    'Mobile',
    'UX e Design',
    'Inovação'
  ]

  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');


  const onSave = (e) => {
    e.preventDefault();
    props.aoColaboradorCadastrado ({
        nome,
        cargo,
        imagem,
        time
    })
  }

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField 
        obrigatorio={true} label="Nome" placeholder="Digite o nome" 
        valor = {nome}
        aoAlterado={valor => setNome(valor)}
        />
        <TextField 
        obrigatorio={true} label="Cargo" placeholder="Digite o cargo" 
        valor = {cargo}
        aoAlterado={valor => setCargo(valor)}
        />
        <TextField 
        label="Imagem" placeholder="Insira a url da imagem" 
        valor = {imagem}
        aoAlterado={valor => setImagem(valor)}
        />
        <Lists  
        obrigatorio={true} label="Time" itens={times}
        valor={time}
        aoAlterado={valor => setTime(valor)}
        >

        </Lists>
        <Button>
          Criar Card
        </Button>
      </form>
    </section>
  );
};
