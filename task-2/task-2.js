const form = document.querySelector('form')
const button = document.querySelector('#addTask')
const list = document.querySelector('#task-list')

form.addEventListener("submit", (e) => {
    e.preventDefault()
  const li = `<li class="task"><p class="text">${newTask.value}</p></li>`
  console.log(taskList)
  return taskList.insertAdjacentHTML("beforeend" , li)
  })
