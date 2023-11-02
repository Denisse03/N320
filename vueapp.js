const app = Vue.createApp({
  data() {
    return {
      courseGoals1: "Learn advanced Javascript",
      courseGoals2: "Learn Vue",
      VueLink: "https://vuejs.org",
      courseGoals3: "<h4>Create an Application</h4>",
      counter: 10,
      name: "",
    };
  },
  computed: {
    fullName() {
      if (this.name == "") {
        return "";
      } else {
        return this.name + " " + "Thomas";
      }
    },
    nameData() {
      let nameVal = [];
      //Lenght of full name
      let namelength = this.fullName;
      nameVal.push(namelength.length);

      //Middle Character

      // let middle = Math.floor(namelength.length / 2);
      let middle = namelength.charAt(Math.floor(namelength.length / 2));

      nameVal.push(middle);

      return nameVal;
    },
  },
  methods: {
    newGoal() {
      const rNum = Math.random();
      if (rNum < 0.2) {
        return "Vue is awesome";
      } else if (rNum > 0.7) {
        return "Vue is fun";
      } else {
        return this.courseGoals1;
      }
    },
    add() {
      this.counter++;
    },
    addMore(num) {
      this.counter += num;
      //this.counter = this.counter + num;
    },
    remove() {
      this.counter--;
    },
    setName(event) {
      this.name = event.target.value;
    },
    resetName() {
      this.name = "";
    },
    submitForm() {
      alert("Form Submitted");
    },
    consoleMe() {
      console.log("Space bar clicked");
    },
  },
});

app.mount("#myGoals");
