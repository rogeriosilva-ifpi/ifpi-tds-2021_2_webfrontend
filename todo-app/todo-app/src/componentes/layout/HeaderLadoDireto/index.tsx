import estilos from './estilos.module.css'

export function HeaderLadoDireito(){
  return (
    <div className={estilos.header_lado_direito}>
      <div className={estilos.bloco}>
        <p>10</p>
        <span>Abertas</span>
      </div>
      <div className={estilos.bloco}>
        <p>12</p>
        <span>Feitas</span>
      </div>
    </div>
  )
}