<template>
    <div> 
        <h2>{{ name }}</h2>
        <p>{{ role }}</p>
        <button @click="toggleInfo()">{{visibleData ? "Hide" : "Show"}} Detail</button>
        <div v-if="visibleData">    
        <p>{{ phone }}</p>
            <p>{{ email }}</p>
            <!-- <p>{{ team }}</p> -->
            <p>{{ teamName=="" ? 'None' : teamName }} </p>
            
            <button v-show="!teamShow" v-if="!teamName" @click="joinTeam()"> 
                <slot>
                Join {{ currentTeam }}

            </slot>
            
            </button>
     
        </div>

        
        
    </div>
</template>
<script>
export default{
    data(){
        return{
            visibleData: false,
            teamShow: false,
        }
    }, 
    props:{
        name: String,
        phone: String,
        email: String,
        role: String,
        currentTeam: String,
        teamName: String,
       
    },
    // emits:["join-team"],
    methods:{
        toggleInfo(){
            this.visibleData=!this.visibleData

        },
        joinTeam(){
            this.$emit("join-team", this.name,this.teamName)
            this.teamShow=true
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