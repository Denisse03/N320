
import { RouterLink } from 'vue-router';


import { RouterLink } from 'vue-router';

<template>
   <header>
    <nav>
       <RouterLink to="/">Home</RouterLink>
       <RouterLink to="/students">Students</RouterLink>
       <RouterLink :to="{name:'props'}">Props</RouterLink>
    </nav>
   </header>
</template>