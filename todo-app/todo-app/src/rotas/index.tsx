import {Route, Routes} from 'react-router-dom'
import { NovaTarefa } from '../paginas/NovaTarefa'
import { Tarefas } from '../paginas/Tarefas'


export function Rotas(){
  return (
    <Routes>
      <Route path="/" element={<Tarefas />} />
      <Route path="/nova-tarefa" element={<NovaTarefa />} />
    </Routes>
  )
}