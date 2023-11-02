const app = Vue.createApp({
  data() {
    return {
      names: "Denisse Dubon",
      // dates: "10.12.23",
      title: "Vue Challenge",
      // greeting: "",
      // refText: "",
    };
  },
  methods: {
    getTodayDate() {
      let today = new Date();
      today = today.toLocaleDateString();
      return today;
    },
    // displayText() {
    //   this.refText = this.$refs.disRef.value;
    // },
  },
  // watch: {
  //   greeting(newV, oldV) {
  //     console.log(`old value ${oldV}`);
  //     console.log(`new value ${newV}`);
  //   },
  // },
});

app.component("greeting-input", {
  template: ` <input v-model="greeting" type="text" />
  <p>{{greeting}}</p>

  <input type="text" @blur="displayText" ref="disRef" />
  <p>{{refText}}</p>`,
  data() {
    return {
      greeting: "",
      refText: "",
    };
  },
  methods: {
    displayText() {
      this.refText = this.$refs.disRef.value;
    },
  },
  watch: {
    greeting(newV, oldV) {
      console.log(`old value ${oldV}`);
      console.log(`new value ${newV}`);
    },
  },
});

app.mount("#challenge");
