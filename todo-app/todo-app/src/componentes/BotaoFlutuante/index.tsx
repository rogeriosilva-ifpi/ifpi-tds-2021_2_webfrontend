import { Link } from 'react-router-dom'
import estilos from './estilos.module.css'

export function BotaoFlutuante(){
  return (
    <div className={estilos.botao}>
      <Link to="/nova-tarefa">+</Link>
    </div>
  )
}