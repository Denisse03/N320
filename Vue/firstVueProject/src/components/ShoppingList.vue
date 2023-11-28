<template>
    <div>
      <header>
        <h2>Shopping List</h2>
        </header>
        <input type="text" ref="inputValue" v-model="inputValue" @keyup.enter="addItem" />
       
        <button @click="addItem">Add Item</button>
  
        <ul>
          <li v-for="(item,  i) in shoppingLists" :key="1">{{ item }}
            <button @click="deleteItem(i)">Delete</button>
            <button @click="editItem(i)">Edit</button>
            <button @click="deleteItem(-1)">Delete All</button>
          
          </li>
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
      },
      deleteItem(i){
        this.shoppingLists=(i+1) ? this.shoppingLists.filter((item, x)=> x!==i) : [];
      },
      editItem(i){
        this.shoppingLists.forEach((item, k) =>{
          if (i===k){
            let newValue = prompt(`Current Value: ${item}`);
            this.shoppingLists.splice(k, 1, newValue);

          } 
        })
      }
  
    }
  }
  </script>
  <style scoped>
  h2{
    color: red;
  }
  </style>