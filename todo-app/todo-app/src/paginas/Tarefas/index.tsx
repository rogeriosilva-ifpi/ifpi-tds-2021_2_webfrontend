
import estilos from './estilo.module.css'

export function Tarefas(){
  return (
    <div>
      <h2 className={estilos.subtitulo}>Minhas Tarefas</h2>
      <ul>
        <li>Cortar a grama</li>
        <li>Limpar a casa</li>
      </ul>
    </div>
  )
}