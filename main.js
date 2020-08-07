//selectors
const inputTodo = document.querySelector(".input-todo")
const btnTodo = document.querySelector(".btn-todo")
const todosList = document.querySelector(".todos-list")

//Event listeners
btnTodo.addEventListener("click", agregarTodo)

//Functions
function agregarTodo(e) {
  e.preventDefault()
  //Create todo div
  const todoDiv = document.createElement("div")
  //todoDiv.classList.add()

  //Create li for todo
  const newTodo = document.createElement("li")
  newTodo.innerText = "Prueba"
  newTodo.classList.add("list-inline-item", "my-3")

  //agregando newTodo dentro de todoDiv
  todoDiv.appendChild(newTodo)

  //Creadno btn terminado
  const btnTerminado = document.createElement("button")
  btnTerminado.innerText = "Terminado"
  btnTerminado.classList.add("btn", "btn-success", "btn-md", "mr-2")
  //Adding the btn to the div
  todoDiv.appendChild(btnTerminado)

  //creando btn completado
  const btnCompletado = document.createElement("button")
  btnCompletado.innerText = "Completado"
  btnCompletado.classList.add("btn", "btn-danger", "btn-md")
  //Adding the btn to the div
  todoDiv.appendChild(btnCompletado)

  //Adding newTodo to todolist(ul)
  todosList.appendChild(todoDiv)
}