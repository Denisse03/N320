<template>
    <h1>All Session</h1>
  <div v-for="a in adds" :key="a.id">
    <h2>{{ a.title }}</h2>
    <p> Time:{{ a.sTime > 12 ? `${a.sTime - 12}:00pm` : `${a.sTime}:00am` }}
    </p>

</div>
    
</template>


<script>
export default {
    data(){
        return{
            session:[],
            currentSession: "",

        }

    },
    props:{
        filterPerson:Array,
        filterList:Array,
        currentTeam: String,
        session: Array,
        add: Array
    },
};
</script>