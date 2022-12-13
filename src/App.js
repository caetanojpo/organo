import { useState } from 'react';
import Banner from './Components/Banner';
import Form from './Components/Form';
import Times from './Components/Times';

function App() {

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Form aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      <Times nome="Programação"></Times>
      <Times nome="Front-End"></Times>
      <Times nome="Data Science"></Times>
      <Times nome="DevOps"></Times>
      <Times nome="Mobile"></Times>
      <Times nome="UX e Design"></Times>
      <Times nome="Inovação"></Times>

    </div>
  );
}

export default App;
