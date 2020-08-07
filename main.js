//selectors
const inputTodo = document.querySelector(".input-todo")
const btnTodo = document.querySelector(".btn-todo")
const todosList = document.querySelector(".todos-list")

//Event listeners
btnTodo.addEventListener("click", agregarTodo)
todosList.addEventListener("click", deleteCheck)
todosList.addEventListener("click", completedCheck)

//Functions
function agregarTodo(e) {
  e.preventDefault()
  //Create todo div
  const todoDiv = document.createElement("div")

  //Create li for todo
  const newTodo = document.createElement("li")
  newTodo.innerText = inputTodo.value
  newTodo.classList.add("list-inline-item", "my-3")

  //agregando newTodo dentro de todoDiv
  todoDiv.appendChild(newTodo)

  //Creadno btn terminado
  const btnTerminado = document.createElement("button")
  btnTerminado.innerText = "Terminado"
  btnTerminado.classList.add("btn-success", "btn", "btn-md", "mr-2")
  //Adding the btn to the div
  todoDiv.appendChild(btnTerminado)

  //creando btn completado
  const btnCompletado = document.createElement("button")
  btnCompletado.innerText = "Eliminar"
  btnCompletado.classList.add("btn-danger", "btn", "btn-md")
  //Adding the btn to the div
  todoDiv.appendChild(btnCompletado)

  //Adding newTodo to todolist(ul)
  todosList.appendChild(todoDiv)

  //Clear input todo value
  inputTodo.value = ""
}

function deleteCheck(e) {
  //getting the todo item
  const item = e.target
  //.classList[0] => valor btn-danger
  if (item.classList[0] === "btn-danger") {
    console.log("eliminado")
    const todo = item.parentElement
    todo.remove()
  }
}

