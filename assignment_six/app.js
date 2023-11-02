const app = Vue.createApp({
  data() {
    return {
      names: "Denisse Dubon",
      course: "N320: ",
      assignmentname: "First Vue Assignment ",
      difficulty: 2,
      completed: false,
      title: "Favorite Songs",
      items: [
        { id: 1, name: "Deja Vu" },
        { id: 2, name: "Bad Idea Right?" },
        { id: 3, name: "Good For U" },
        { id: 4, name: "Hope Ur Ok" },
        { id: 5, name: "Brutal" },
        { id: 6, name: "Vampire" },
        { id: 7, name: "Guts" },
      ],
      favorite: 0,
      favoriteItem: "",
      newSong: "",
    };
  },
  methods: {
    getDueDate() {
      let today = new Date();
      let dueDate = new Date(today);
      dueDate.setDate(today.getDate() + 7);
      return dueDate.toLocaleDateString();
    },
    newFav() {
      if (this.favorite + 1 < this.items.length) {
        this.favorite += 1;
      } else {
        this.favorite = 0;
      }
      this.favoriteItem = this.items[this.favorite].name;
    },
    addItem() {
      if (this.newSong != "") {
        this.items.push({ id: this.items, name: this.newSong });
        this.newSong = "";
      }
    },
  },
});

app.mount("#challenge");
