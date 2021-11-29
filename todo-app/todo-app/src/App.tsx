import React from 'react';
import './App.css';
import { Rotas } from './rotas';


function App() {
  return (
    <div className="container">
        <header>
          <p>App Tarefas</p>
          <nav>
            <a href="/">Minhas Tarefas</a>--
            <a href="/nova-tarefa">Nova Tarefa</a> 
          </nav>
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
