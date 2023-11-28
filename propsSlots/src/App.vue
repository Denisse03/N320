<template>
  <navigation-header></navigation-header>

  <RouterView :greeting="greeting" :who="who" :count="count" :myVue="myVue" :book="book"/>

</template>

<script>
import NavigationHeader from './components/NavigationHeader.vue';
import { RouterView } from 'vue-router'

export default{
  components:{
    NavigationHeader
},
    data() {
        return {
            // greeting: "hello",
            // who: "Vue",
            // count: 1,
            // myVue: "Vue.js",
            book: {
                // id: 1,
                // title: "Vue 3 Development"
            },
            project:{
                type:"final",
                title: "Conference Sessions Application",
                dueDate: "12/08/2023",
                points: 150
            }
        };
    },
    provide:{
        project:{
                type:"final",
                title: "Conference Sessions Application",
                dueDate: "12/08/2023",
                points: 150
            }

    },
  
    components: { RouterView }
}

</script>

<style>
a.router-link-active{
    background-color: blue;
    color: red;
    padding: 10px;
    justify-content: space-between;
}

</style>
