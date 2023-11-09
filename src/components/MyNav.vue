<template>
  <div class="nav flex items-center justify-center gap-2 bg-red-200 p-2 m-2 ">
    <!-- <h2>nav</h2> -->
    <ul class="flex justify-between text-xl list-none bg-slate-400 ">
      <li class=" decoration-none" v-for="route in router.options.routes" :key="route.name" >
        <router-link :to="{name : route.name }"> 
          {{ route.meta.title }}
         </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>

import { useRouter } from 'vue-router';

const router = useRouter();

</script>

 
<style lang="scss" scoped>

body *{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.nav{
  background: wheat;
  padding: 0;
  margin: 0;
}
ul{
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
a{
  text-decoration: none;
  display: flex;
  color: unset;
  &.router-link-active{
   color: rgb(147, 52, 52);
  }
}
li{
  color: rgb(74, 172, 163);
  justify-content: space-evenly;
  align-items: center;
  padding: 0.6rem;
  margin: 0.4rem;
  text-transform: capitalize;
  font-weight: bold;
  font-size: 22px;
  transition: all 0.4s ease-in;
}
li:hover{
  color: rgb(255, 127, 185);
}
</style>
 