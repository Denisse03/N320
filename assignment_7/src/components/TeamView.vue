<template>
 
 <div>
    <h1>Team Member</h1>
    <team-info v-for="member in filterList" :key="member.id" :name="member.name" :phone="member.phone" :email="member.email" :role="member.role" :teamName="member.team" :currentTeam="currentTeam"
     @join-team="joinTeam" ></team-info>
  </div>

  <br/> 


 <add-team :members = "members"

@filter-team="filterTeam" ></add-team>


</template>

<script>
import { toHandlers } from 'vue';

export default{
 
    data() {
        return {
    //         members: [{
    //     id: 1,
    //     name: "Chandler Bing",
    //     phone: "123 123 1234",
    //     email: "cBing@gmail.com",
    //     role: 'Developer',
    //     team: '',

    //   },
    //   {
    //   id: 2,
    //   name: "Joey Tribbiani",
    //   phone: "321 321 4321",
    //   email: "jtribby@gmail.com",
    //   role: 'UI/UX',
    //   team: '',
    //   },
    //   {
    //   id: 3,
    //   name: "Ross Geller",
    //   phone: "222 333 4444",
    //   email: "rgeller@gmail.com",
    //   role: 'Developer',
    //   team: '',
    //   },
    //   {
    //   id: 4,
    //   name: "Monica Bing",
    //   phone: "123 123 1235",
    //   email: "mbing@gmail.com",
    //   role: 'Designer',
    //   team: '',
    //   },
    //   {
    //   id: 5,
    //   name: "Rachel Green",
    //   phone: "876 345 1678",
    //   email: "rgreen@gmail.com",
    //   role: 'UI/UX',
    //   team: '',
    //   },
    //   {
    //   id: 6,
    //   name: "Phoebe Buffay",
    //   phone: "678 908 5686",
    //   email: "pbuff@gmail.com",
    //   role: 'UI/UX',
    //   team: '',
    //   },
    //   {
    //   id: 7,
    //   name: "Stacy Boling",
    //   phone: "345 679 4212",
    //   email: "sBoling@gmail.com",
    //   role: 'Designer',
    //   team: '',
    //   },
    //   {
    //   id: 8,
    //   name: "Jake Trimult",
    //   phone: "443 665 7888",
    //   email: "jtrim@gmail.com",
    //   role: 'Developer',
    //   team: '',
    //   },
    //   {
    //   id: 9,
    //   name: "Rose Greathouse",
    //   phone: "345 567 9087",
    //   email: "rgreat@gmail.com",
    //   role: 'UI/UX',
    //   team: '',
    //   },
    //   {
    //   id: 10,
    //   name: "Mindy Kellum",
    //   phone: "555 666 7777",
    //   email: "mKellum@gmail.com",
    //   role: 'UI/UX',
    //   team: '',
    //   },
    //   {
    //   id: 11,
    //   name: "Sarah Miller",
    //   phone: "987 654 1234",
    //   email: "smiller@gmail.com",
    //   role: 'Developer',
    //   team: '',
    //   },
    //   {
    //   id: 12,
    //   name: "Caroline Bender",
    //   phone: "111 222 3456",
    //   email: "cBend@gmail.com",
    //   role: 'Designer',
    //   team: '',
    //   },
    //   ],
        TeamsList:[],
        // filterList: [],
        // currentTeam: "",
    }
    },
    props:{
        members:Array, filterList:Array, currentTeam:String
    },
    methods: {
        addTeam(name, phone, email, role) {
            this.$emit("add-team", name, phone, email, role)
           
        },
       
        filterTeam(name, role){
            this.$emit("filter-team", name, role)
        },
       
        joinTeam(memberName) {
            this.$emit("join-team", memberName)
          
        },
       
        
    },
}

</script>