import { ref, onMounted } from "vue"

const todosFunction = () => {

  //Data
  const todosList = ref([]);


  // Methods :


//set to local storg :

const addToLocalSt = () => {
  localStorage.setItem("todos" , JSON.stringify(todosList.value))
  }

//upf=date todos
const updateTodos = () => {
  if (localStorage.getItem("todos")) {
    todosList.value = JSON.parse(localStorage.getItem("todos"))
  }

  }
  

  onMounted(
    () => {
      updateTodos()
    }
  )

  return { todosList , addToLocalSt  }

  
}

export default todosFunction;

