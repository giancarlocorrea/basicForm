//Pega os valores dos campos/inputs conforme o ID
const form = document.getElementById('formDados')
const name = document.getElementById('name')
const address = document.getElementById('address')
const city = document.getElementById('city')
const district = document.getElementById('district')
const state = document.getElementById('state')

//Adiciona a função quando o usuário for enviar/submeter o formulário
form.addEventListener('submit', e => {
  e.preventDefault()
  checkForm('campos')
})

//Função para verificar/validar o formulário
function checkForm(_class) {
  const nameValue = name.value
  const addresValue = address.value
  const cityValue = city.value
  const districtValue = district.value
  const stateValue = state.value

  {
    if (nameValue === '') {
      setError(name, `${_class}`, 'O nome é obrigatório')
    } else if (nameValue.length <= 3) {
      setError(name, `${_class}`, 'O nome deve conter pelo menos 4 caracteres')
    } else setSuccess(name, `${_class}`)

    if (addresValue === '') {
      setError(address, `${_class}`, 'Preencha o endereço')
    } else setSuccess(address, `${_class}`)

    if (cityValue === '') {
      setError(city, `${_class}`, 'Preencha a cidade')
    } else setSuccess(city, `${_class}`)

    if (districtValue === '') {
      setError(district, `${_class}`, 'Preencha o bairro')
    } else setSuccess(district, `${_class}`)

    if (stateValue === '') {
      setError(state, `${_class}`, 'Selecione o estado')
    } else setSuccess(state, `${_class}`)
  }

  //seleciona todos os inputs com a classe de sucesso
  const inputForm = document.querySelectorAll(`.${_class}`)

  const formValid = [...inputForm].every(inputs => {
    return inputs.className === `${_class} success`
  })

  if (formValid) {
    alert('Formulário VALIDADO')
  }
}

//Função para atribuir mensagem de Sucesso em determinado campo/input
function setSuccess(input, _class) {
  const form = input.parentElement

  form.className = `${_class} success`
}

//Função para atribuir mensagem de Erro em determinado campo/input
function setError(input, _class, message) {
  const form = input.parentElement
  const small = form.querySelector('small')

  small.innerText = message
  form.className = `${_class} error`
}
