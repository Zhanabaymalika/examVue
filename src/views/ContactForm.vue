<template>
  <div>
    <h1>Contact Us</h1>
    <p>Get in touch with us.</p>
    <!-- You can add a contact form or contact information here -->
    <label for="calendar">Select a date:</label>
    <input type="date" id="calendar" name="calendar" @change="handleDateChange">
  </div>
</template>

<script>
export default {
  name: 'ContactFrom',
  data() {
    return {
      selectedDate: null
    };
  },
  methods: {
    handleDateChange(event) {
      this.selectedDate = event.target.value;
      this.processSelectedDate(); 
    },
    processSelectedDate() {
      console.log('Selected date:', this.selectedDate);
     
    }
  }
}
</script>

<style scoped>

</style>
