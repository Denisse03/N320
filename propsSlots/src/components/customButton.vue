<template>
    <button class="customBTN"><slot>Custom Button</slot></button>
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