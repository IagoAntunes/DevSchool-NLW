// Procurar o botao
document.querySelector("#add-time")
.addEventListener('click', cloneField)
//Quando clicar no botao
//Executar uma acao
function cloneField() {
    //Duplicar os campos
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)//bolean: true ou false
    //Pegar  os Campos,que campos
  const fields = newFieldContainer.querySelectorAll('input')
    // para cada campo limpar
  fields.forEach(function(field) {
    field.value = ""
  })
  //Color na Página,onde
  document.querySelector('#schedule-items').appendChild(newFieldContainer)
}