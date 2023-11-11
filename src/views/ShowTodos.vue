<template>
  <div class="show-todos flex items-center text-yellow-500 ">
    <h1>show todos</h1>
    <table class="w-full text-green-400" v-if="todoLists.length">
      <thead>
        <tr>
          <th>text</th>
          <th>from</th>
          <th>to</th>
          <th>created at</th>
          <th>actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(todoo , index) in todoLists" :key="todoo.id"  :style="`${todoo.isCompeleted ? 'background: #b8ecd0 ' : 'background : transparent'}`" >
          <td>{{ todoo.text }}</td>
          <td>{{ todoo.from }}</td>
          <td>{{ todoo.to }}</td>
          <td>{{ new Date(todoo.createdAt).toLocaleDateString() }}</td>
          <td> 
            <div class="">  
              <button @click="markCompelted(todoo)" class="compeleted">
                {{todoo.isCompeleted ? "compeleted" : "incompeleted " }}
              </button>
              <button @click="deleteTodo(index)" class="delete">
                delete
              </button>
            </div>
          </td>
         </tr>
      </tbody>
    </table>
    <h2 v-else>no todos to show</h2>
  </div>
</template>

<script setup>

import todoMixn from "../Mixens/todoMixn"

const { todosList, addToLocalSt } = todoMixn()

// delete toddoo
const deleteTodo = (indx) => {
  todosList.value.splice(indx, 1)
  addToLocalSt()
}

//mark as compeleted :
const markCompelted = (td) => {
  td.isCompeleted = !td.isCompeleted
  addToLocalSt()
}

</script>


<style scoped>

button{
  padding: 1%;
  margin: 1%;
  cursor: pointer;
}
.compeleted{
  background-color: rgb(95, 136, 95);
}
.delete{
  background-color: rgb(155, 87, 87);
}
</style>