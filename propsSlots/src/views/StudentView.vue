<template>
    <h1>Student View</h1>


 <div>
    <h1>Student Data</h1>
    <student-data v-for="student in students" :key="student.sName" :sName="student.sName" :sAge="student.sAge" :major="student.major" :cLevel="student.cLevel" :graduate="student.graduate" :isEnrolled="student.isEnrolled" @toggle-enrollment="toggleEnrollment" ></student-data>
  </div>

  <br/> 

 <add-student @add-student="addStudent"></add-student>
</template>

<script>
export default{
 
    data() {
        return {
            students: [
                {
                    sName: "Robert Smith",
                    sAge: 22,
                    major: "Web Development",
                    cLevel: 3,
                    isEnrolled: true
                },
                {
                    sName: "Susan Rutherford",
                    sAge: 25,
                    major: "Informatics",
                    graduate: true,
                    isEnrolled: false
                }
            ],
            pastStudents: []
        };
    },
    methods: {
        addStudent(name, age, major, cLevel, graduate) {
            cLevel = parseInt(cLevel);
            if (graduate == "true") {
                graduate = true;
            }
            else {
                graduate = false;
            }
            const newStudent = {
                sName: name,
                sAge: age,
                major: major,
                cLevel: cLevel,
                graduate: graduate
            };
            console.log(newStudent.graduate);
            console.log(newStudent);
            this.students.push(newStudent);
        },
        toggleEnrollment(value) {
            const currentStudent = this.students.find((s) => s.sName === value);
            currentStudent.isEnrolled = !currentStudent.isEnrolled;
        }
    },
}

</script>