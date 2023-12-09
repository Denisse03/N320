<template>
    <h1>Web Dev Conference</h1>
    <h2>User Session</h2>
    <p>{{ adds.length }} Sessions:</p>
    <div class="info" v-for="a in adds" :key="a.id">
      <h2>{{ a.title }}</h2>
      <p> Time:{{ a.sTime > 12 ? `${a.sTime - 12}:00pm` : `${a.sTime}:00am` }}</p>
      <button style="cursor: pointer;" @click="removeSession(a)">remove</button>
      <br>
    </div>
    <br>
  </template>
  
  <script>
  export default {
    data() {
      return {
        sessions: [],
        currentSession: "",
      };
    },
    props: {
      adds: Array,
      remove: Array,
    },
    methods: {
      removeSession(session) {
        let removal = this.adds.findIndex((item) => item.id === session.id);
        if (removal !== -1) {
          this.adds.splice(removal, 1);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .info {
    padding: 10px;
    background-color: lightgreen;
    border-radius: 25px;
    border: 2px solid #73AD21;
    margin-bottom: 20px;
    margin-left: 20px;
  }
  </style>
  