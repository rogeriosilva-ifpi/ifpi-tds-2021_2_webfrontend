
let qtd_itens = 0
let qtd_itens_comprados = 0

function cadastrar_item(){
  console.log('Botao Cadastrar clicado')
  const campo_nome = document.querySelector('#nome')
  const nome = campo_nome.value

  const campo_qtd = document.querySelector('#qtd')
  const qtd = campo_qtd.value

  const item = criar_item(nome, qtd)

  const lista_itens = document.querySelector('#itens')
  lista_itens.appendChild(item)

  // apagar form
  campo_nome.value = ''
  campo_qtd.value = ''
  campo_nome.focus()

  qtd_itens += 1
  atualizar_dados()
}

function atualizar_dados(){
  const span_qtd_itens = document.querySelector('#contador_itens')
  const span_qtd_itens_comprados = document.querySelector('#contador_itens_comprados')

  span_qtd_itens.innerText = qtd_itens
  span_qtd_itens_comprados.innerText = qtd_itens_comprados
}

function criar_item(nome, qtd){
  const item = document.createElement('li')
  const descricao = document.createElement('span')
  const botao_remover = document.createElement('button')
  const checkbox_comprar = document.createElement('input')
  checkbox_comprar.setAttribute('type', 'checkbox')

  descricao.innerText = `${nome} - qtd: ${qtd}`
  botao_remover.innerText = 'Remover'

  botao_remover.onclick = (event) => {
    const item = event.target.parentNode
    qtd_itens -= 1
    atualizar_dados()
    item.remove()
  }

  checkbox_comprar.onchange = (event) => {
    const checkbox = event.target
    const marcado = checkbox.checked
    
    if (marcado){
      qtd_itens_comprados += 1
    }else{
      qtd_itens_comprados -= 1
    }

    atualizar_dados()

  }

  item.appendChild(descricao)
  item.appendChild(checkbox_comprar)
  item.appendChild(botao_remover)

  return item
}

function main(){
  console.log('JS Started!')
  const btn_cadastrar = document.querySelector('#btn_cadastrar')

  // btn_cadastrar.onclick = () => {
  //   console.log('Botao Cadastrar clicado')
  // }

  // btn_cadastrar.onclick = cadastrar_item

  btn_cadastrar.addEventListener('click', cadastrar_item)

  atualizar_dados()
}

main()