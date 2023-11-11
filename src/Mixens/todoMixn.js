import { ref, onMounted } from "vue"

const todosFunction = () => {

  //Data
  const todosList = ref([]);

// Methods :

//set to local storg :

const addToLocalSt = () => {
  localStorage.setItem("todos", JSON.stringify(todosList.value))
  console.log(todosList.value)
  }

//upf=date todos
const updateTodos = () => {
  if (localStorage.getItem("todos")) {
    todosList.value = JSON.parse(localStorage.getItem("todos"))
  }
    console.log(todosList.value)
  }
  
  onMounted(
    () => {
      updateTodos()
    }
  )

  return { todosList , addToLocalSt  }
  
}

export default todosFunction;

