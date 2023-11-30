<template>
    <button class="customBTN"><slot>Add to Team </slot></button>
</template>

<style>
.customBTN{
    background-color: blueviolet;
    color: white;
    padding: 1em;
    border-radius: 10px;
}
.customBTN:hover{
    background-color: blue;
}
</style>