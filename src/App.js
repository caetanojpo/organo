import { useState } from 'react';
import Banner from './Components/Banner';
import Form from './Components/Form';
import Rodape from './Components/Rodape';
import Times from './Components/Times';

function App() {

  const [colaboradores, setColaboradores] = useState([]);

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#a6d157',
      corSecundaria: '#f0f8e2'
    },
    {
      nome: 'DevOps',
      corPrimaria: '#e06b69',
      corSecundaria: '#fde7e8'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#ffba05',
      corSecundaria: '#fff5d9'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#db6ebf',
      corSecundaria: '#fae9f5'
    },
    {
      nome: 'Inovação',
      corPrimaria: '#ff8a29',
      corSecundaria: '#ffeedf'
    }    

  ]

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Form  times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {times.map(time => <Times 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria = {time.corPrimaria} 
      corSecundaria = {time.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}/>)}
      <Rodape />
    </div>
  );
}

export default App;
