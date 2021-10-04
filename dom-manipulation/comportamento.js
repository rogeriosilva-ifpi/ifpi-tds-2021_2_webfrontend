// alert('Oi THE!')

function adicionarParque(){
  const locais = document.querySelector('#locais')
  const local = document.querySelector('#local')

  // Criando um novo item (Parque)
  const parque = document.createElement('li')
  const descricao = document.createElement('span')
  const botao = document.createElement('button')
  
  descricao.innerText = local.value
  botao.innerText = 'Remover'
  botao.onclick = removerParque
  
  parque.appendChild(descricao)
  parque.appendChild(botao)

  // alert(locais.innerHTML)
  locais.appendChild(parque)

  local.value = ''
  local.focus()
}

function removerParque(event){
  const item = event.target.parentNode
  // alert(item)
  item.remove()
}


function main(){
  const btn_adicionar = document.querySelector('#btn_adicionar')

  btn_adicionar.addEventListener('click', adicionarParque)

}

main()