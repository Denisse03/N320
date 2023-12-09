<template>
    <button class="customBTN"><slot>clear filter </slot></button>
</template>

<style>
.customBTN{
    background-color: green;
    color: white;
    padding: 1em;
    border-radius: 10px;
    width: 100px;
    height: 50;
}
.customBTN:hover{
    background-color: lightgreen;
}
</style>