<template>
    <h1>Book Information</h1>
    <!-- <h1>{{ book }}</h1> -->
    <h2>{{ title }}</h2>
    <p>{{ id }}</p>
</template>
<script>
export default{
    data(){
        return{

        }
    }, props:['id', 'title']
}
</script>