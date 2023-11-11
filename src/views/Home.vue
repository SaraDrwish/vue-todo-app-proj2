<template>
  <div class="flex bg-green-500 items-center text-yellow-400">
    <h1>Add new todo</h1>
    <form action="" @submit.prevent="addTodo" >
      <input v-model="todoObject.text" type="text" placeholder="inter your todo">
      <br>
      <input   v-model="todoObject.from" type="date" name="from" id="" required >
      <input  v-model="todoObject.to" type="date" name="to" id="" required >
      <br>
      <br>
      <input type="button" value="add" required  @click="addTodo">
    </form>
  </div>
</template>

<script setup>

import { ref , onMounted } from 'vue';

// data : 

// const todoList = ref([]);

const todoObject = ref({
  id:'',
  text: '',
  from:'' ,
  to: '',
  createdAt: '',
   isCompeleted: false 
} );

// methids :

const addTodo = () => {
  todoObject.value.id = todoList.value.length + 1
  todoObject.value.createdAt = new Date()
  todoList.value.push(todoObject.value)
  addToLocalSt();
  alert("todo added succefly ")
  todoObject.value = {
    id:'',
    text: '',
    from: '',
    to: '',
    createdAt: '',
    isCompeleted : false
  }
}

// //set to local storg :

// const addToLocalSt = () => {
//   localStorage.setItem("todos" , JSON.stringify(todoList.value))
// }

// // update todoslist :

// const updatLocalStTodos = () => {
//   if (localStorage.getItem("todos")) {
//     todoList.value = JSON.parse(localStorage.getItem("todos"))
//   }
// }

// //Hooks :

// onMounted(() => {
//     updatLocalStTodos();
// } )
 



</script>
