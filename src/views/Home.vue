<template>
  <div>
    

    <h2>Student List:</h2>
    <ul>
      <li v-for="(student, index) in students" :key="index">
        <input type="text" v-model="student.firstName" placeholder="First Name">
        <input type="text" v-model="student.lastName" placeholder="Last Name">
        - Grade: {{ student.grade }}
        <input type="number" v-model="student.grade" min="0" max="100" @change="saveGrades">
        Date: <input type="date" v-model="student.date" @change="saveGrades">
        Comment: <input type="text" v-model="student.comment" @change="saveGrades">
      </li>
    </ul>
    <button @click="addStudent">Add Student</button>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      students: [
        { firstName: '', lastName: '', grade: 0, date: null, comment: '' },
       
      ]
    }
  },
  mounted() {

    const savedData = JSON.parse(localStorage.getItem('studentData'));
    if (savedData) {
      this.students = savedData;
    }
  },
  methods: {
    saveGrades() {
      
      localStorage.setItem('studentData', JSON.stringify(this.students));
    },
    addStudent() {
      this.students.push({ firstName: '', lastName: '', grade: 0, date: null, comment: '' });
      this.saveGrades(); 
    }
  }
}
</script>

<style scoped>

</style>
