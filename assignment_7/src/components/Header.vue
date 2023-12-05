
import { RouterLink } from 'vue-router';


import { RouterLink } from 'vue-router';

<template>
   <header>
    <nav>
       <RouterLink  to="/">Home</RouterLink>
       <RouterLink to="/teams">Teams</RouterLink>
    </nav>
   </header>
</template>

<style scoped >


a.router-link-active{
    /* background-color: blue; */
    color: gray;
    padding: 10px;
    justify-content: space-between;
}
</style>