import React from 'react';
import './App.css';
import { HeaderLadoDireito } from './componentes/HeaderLadoDireito';
import { HeaderLadoEsquerdo } from './componentes/HeaderLadoEsquerdo';
import { Rotas } from './rotas';


function App() {
  return (
    <div className="container">
        <header>
          <HeaderLadoEsquerdo />
          <HeaderLadoDireito />
        </header>
        <main>
            <Rotas />
        </main>
        <footer>
          Feito com ReactJS + JsonServer + ;)
        </footer>
    </div>
  );
}

export default App;
