<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/ShowTodos">show todos</router-link>
  </nav> -->

  <div class="flex bg-slate-600 p-16">

      <MyNav />
      <!-- <my-nav></my-nav> -->

  </div>


  <router-view/>
</template>


<script setup >

import MyNav from './components/MyNav.vue';

</script>

<style scoped>
body *{
  margin: 0;
  padding: 0;
  text-align: center;
  text-transform: capitalize;
  color: rgb(20, 77, 85);
  box-sizing: border-box;

}
</style>

 
