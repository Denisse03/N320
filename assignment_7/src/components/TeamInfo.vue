<template>
    <div> 
        <h2>{{ name }}</h2>
        <p>{{ role }}</p>
        <button @click="toggleInfo()">{{visibleData ? "Hide" : "Show"}} Detail</button>
        <div v-if="visibleData">    
        <p>{{ phone }}</p>
            <p>{{ email }}</p>
            <p>{{ team }}</p>
            <button v-if="!team" @click="joinTeam()"> Join {{ teamName }}</button>
        </div>

        
        
    </div>
</template>
<script>
export default{
    data(){
        return{
            visibleData: false
        }
    }, 
    props:{
        name: String,
        phone: String,
        email: String,
        role: String,
       
    },
    // emits:["join-team"],
    methods:{
        toggleInfo(){
            this.visibleData=!this.visibleData
        },
        joinTeam(){
            this.$emit("join-team", this.name,this.teamName)
        }
        // toggleTeam(value){
        //     this.$emit("toggle-info", value);
        // }
    }
}
</script>

<style scoped>


button{
 background-color: #04AA6D; 
  border: none;
  color: white;
  margin: 20px;
  padding: 15px 15px;
  text-align: center;
  display: inline-block;

}
</style>