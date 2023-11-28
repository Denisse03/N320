<template>
    <form @submit.prevent="submitData">
        <label>Name:</label>
        <input type="text" v-model="enterName"/>
        <br/>

        <label>Age:</label>
        <input type="number" v-model="enterAge"/>
        <br/>

        <label>Major:</label>
        <input type="text" v-model="enterMajor"/>
        <br/>

        <label>Class Rank</label>
        <select v-model="enteredClass">
            <option value="1">Freshman</option>
            <option value="2">Sophmore</option>
            <option value="3">Junior</option>
            <option value="4">Senior</option>
        </select> <br/>
        <label>Graduate:</label>
        <input type="checkbox" v-model="enteredGrad" name="graduate" value="true"/>
        <button>Add Student</button>
    
    </form> 
</template>

<script>
export default{
    data(){
        return{
            enterName: "",
            enterAge: "",
            enterMajor: "",
            enteredClass: "",
            enteredGrad: "",
        }
    },
    emits:["add-student"],
    methods:{
        submitData(){
            this.$emit("add-student", this.enterName, this.enterAge, this.enterMajor, this.enteredClass, this.enteredGrad)
        }
    }
}

</script>