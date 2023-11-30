<template>
    <form @submit.prevent="submitData">
        <label for="teamName">Team Name:</label>
        <input type="text" v-model="teamName"/>
        <br/>

        <label for="memberRole">Role:</label>
        <select v-model="memberRole">
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="UI/UX">UI/UX</option>
        </select> <br/>
        <custom-button></custom-button>
        
        <!-- <button>Add To Team</button> -->
    
    </form> 
</template>

<script>
export default{
    data(){
        return{
            teamName: "",
            memberRole: "",
        }
    },
    emits:["filter-team"],
    methods:{
        submitData(){
            console.log(this.teamName)
            console.log(this.memberRole)
            this.$emit("filter-team", this.teamName, this.memberRole)
        }
    }
}

</script>

<style scoped>
form{
    widows: 600px;
    height: 500px;

}
input{
   
    width: 100px;
}

select{
    width: 100px;
}
label{
    margin-right: 10px;
}

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