<template>
      <h1>Teams </h1>

    <!-- this is where I will loop through the team. in the team I will loop through the member to get the data -->


    <div v-for="members in filterList" :key="members.id" :name="members.name" :phone="members.phone" :email="members.email" :role="members.role" :teamName="members.team" :currentTeam="currentTeam">
      <p v-if="members.team == currentTeam">
        <p>{{ currentTeam }}</p>
        <p>{{ members.name }}</p>
        <p>{{ members.role }}</p>
        <p>Phone:{{ members.phone }}</p>
        <p>Email:{{ members.email }}</p>
    </p>
      
    </div>

    <!-- <div v-for="member in filterList" :key="member.id">
  <p>{{ member.team }}</p>
  <p>{{ member.name }}</p>
  <p>{{ member.role }}</p>
  <p>Phone:{{ member.phone }}</p>
  <p>Email:{{ member.email }}</p>
</div> -->


   
      
</template>
 <script>
 export default {
    data(){
        return{
            teamnameList:[],
            filterList:[],

        }

    },
    props:{
        teamnameList:Array,
        filterList:Array,
        currentTeam: String,
        members: Array
    },
};



</script> 