<template>

    <div>
        <h2>{{ sName }}</h2>
        <p>{{ isEnrolled }}</p>
        <button @click="toggleDetail()">{{visibleData ? "Hide" : "Show"}} Detail</button>
        <button @click="toggleEnrollment(sName)">Toggle Enrollment</button>
        <div v-if="visibleData">
            <h2>Student Details</h2>
            <p>Age: {{ sAge }}</p>
            <p>Major: {{ major }}</p>
            <p v-if="cLevel">Class Rank: {{ cLevel }}</p>
            <p v-if="graduate">Graduated</p>
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
    // props:['sName', 'sAge', 'major', 'cLevel', 'graduate']
    props:{
        sName: String,
        sAge: Number,
        major: {
            type: String,
            required: true
        },
        cLevel:{
            type: Number,
            validator: function(value){
                return (value > 0 && value <=4 )
            }
        },
        graduate: Boolean,
        isEnrolled: Boolean
    },
    methods:{
        toggleDetail(){
            this.visibleData=!this.visibleData
        },
        toggleEnrollment(value){
            this.$emit("toggle-enrollment", value);
        }
    }
}
</script>