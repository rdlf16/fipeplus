import React, { useState } from 'react';
import Footer from './components/footer/footer';
import Header from "./components/header/header";
import Main from './components/main/main';

function App() {
  const [tema, setTema] = useState(false)
  let cor = '' 

  function fundo() {
    if (tema) {
      cor = 'FundoBranco'
    } else {
      cor = ''
    }
  }

  fundo()

  function alterarTema(event) {
    const bool = event.target.checked
    setTema(bool)
  }

  return (
    <div className={cor}>
      <Header alterarTema={alterarTema} tema={tema} />
      <Main />
      <Footer tema={tema} />
    </div>
  );
}

export default App;
