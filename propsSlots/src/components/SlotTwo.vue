<template>
    <div>
        <navigation-header></navigation-header>
        <h1>Your Students</h1>
        <slot>No students are currently enrolled.</slot>
    </div>
</template>
<script>
import NavigationHeader from './NavigationHeader.vue';
export default{
    components:{
        NavigationHeader
    },
    data(){
        return{

        }
    }
}
</script>