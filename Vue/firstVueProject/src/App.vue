<!-- <template>
  <div>
    <header>
      <h2>Shopping List</h2>
      </header>
      <input type="text" ref="inputValue" v-model="inputValue" @keyup.enter="addItem" />
     
      <button @click="addItem">Add Item</button>

      <ul>
        <li v-for="(item,  i) in shoppingLists" :key="1">{{ item }}</li>
      </ul>
  </div>
</template>
<script>

export default{
  data(){
    return{
      inputValue: '',
      shoppingLists:[],
    }
  },
  methods:{
    addItem(){
      //If items has a value, push to array
      if(this.inputValue!=''){
        this.shoppingLists.push(this.inputValue)
        this.inputValue = "";
      }
      console.log(this.shoppingLists)
      this.$refs.inputValue.focus()
     
      //Clear the input after push

      //Bring focus to input for next addition
    }

  }
}
</script>
<style>
</style> -->

<template>
  <h2>My Shopping List</h2>
  <shopping-list></shopping-list>
</template>

<script></script>

<style>
h2{
  background-color: crimson;
  padding: 10px;
  color: white;
  margin: 0;
}
</style>