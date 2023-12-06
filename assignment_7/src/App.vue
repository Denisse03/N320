<template>
    <navigation-header></navigation-header>

  
    <!-- <RouterView :teamnameList="teamnameList"   :members="members" :filterList="filterList" :currentTeam="currentTeam" 
    @filter-team="filterTeam" @join-team="joinTeam" @add-team="addTeam"
    @new-member="newMember"
   /> -->

   <RouterView :teamnameList="teamnameList"   :members="members" :filterList="filterList" :currentTeam="currentTeam" 
    @filter-team="filterTeam" @join-team="joinTeam" @add-team="addTeam"
    
   />


</template>

<script>
import NavigationHeader from './components/Header.vue';
import { RouterView } from 'vue-router'

export default{
  components:{
    NavigationHeader
},
  data(){
    return{
      members: [{
        id: 1,
        name: "Chandler Bing",
        phone: "123 123 1234",
        email: "cBing@gmail.com",
        role: 'Developer',
        team: '',

      },
      {
      id: 2,
      name: "Joey Tribbiani",
      phone: "321 321 4321",
      email: "jtribby@gmail.com",
      role: 'UI/UX',
      team: '',
      },
      {
      id: 3,
      name: "Ross Geller",
      phone: "222 333 4444",
      email: "rgeller@gmail.com",
      role: 'Developer',
      team: '',
      },
      {
      id: 4,
      name: "Monica Bing",
      phone: "123 123 1235",
      email: "mbing@gmail.com",
      role: 'Designer',
      team: '',
      },
      {
      id: 5,
      name: "Rachel Green",
      phone: "876 345 1678",
      email: "rgreen@gmail.com",
      role: 'UI/UX',
      team: '',
      },
      {
      id: 6,
      name: "Phoebe Buffay",
      phone: "678 908 5686",
      email: "pbuff@gmail.com",
      role: 'UI/UX',
      team: '',
      },
      {
      id: 7,
      name: "Stacy Boling",
      phone: "345 679 4212",
      email: "sBoling@gmail.com",
      role: 'Designer',
      team: '',
      },
      {
      id: 8,
      name: "Jake Trimult",
      phone: "443 665 7888",
      email: "jtrim@gmail.com",
      role: 'Developer',
      team: '',
      },
      {
      id: 9,
      name: "Rose Greathouse",
      phone: "345 567 9087",
      email: "rgreat@gmail.com",
      role: 'UI/UX',
      team: '',
      },
      {
      id: 10,
      name: "Mindy Kellum",
      phone: "555 666 7777",
      email: "mKellum@gmail.com",
      role: 'UI/UX',
      team: '',
      },
      {
      id: 11,
      name: "Sarah Miller",
      phone: "987 654 1234",
      email: "smiller@gmail.com",
      role: 'Developer',
      team: '',
      },
      {
      id: 12,
      name: "Caroline Bender",
      phone: "111 222 3456",
      email: "cBend@gmail.com",
      role: 'Designer',
      team: '',
      },
      ],
      TeamsList:[],
        filterList: [],
        currentTeam: "",
        teamnameList: [],
       
    }
  },
  methods: {
      addTeam() {
        // AddTeam function: add new team to teamnameList array
        let exists= this.teamnameList.includes(this.currentTeam)
        if(!exists){
          this.teamnameList.push(this.currentTeam)
        }
        console.log(this.teamnameList)
            
        },
        filterTeam(tName, role){
          console.log('filterTeam called with:', tName, role);
            this.filterList = this.members.filter((member) => member.role === role);
            this.currentTeam=tName;
        },
        joinTeam(memberName) {
        
            const member = this.members.find((m) => m.name === memberName);  
            const newTeam = {
                name: member.name,
                phone: member.phone,
                email: member.email,
                role: member.role,
                team: this.currentTeam,
            };
            member.team = this.currentTeam
            this.TeamsList.push(newTeam);
            console.log(this.TeamsList)
            this.addTeam(this.currentTeam) 
  
        },

        

    },
  components: { RouterView }
}

</script>


<style scoped>
team-view{
  background-color: red;
}



</style>
