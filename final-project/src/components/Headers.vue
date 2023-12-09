
import { RouterLink } from 'vue-router';


import { RouterLink } from 'vue-router';

<template>
   <header>
    <nav>
       <RouterLink  to="/">Sessions</RouterLink>
       <RouterLink to="/sessions">User Sessions</RouterLink>
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