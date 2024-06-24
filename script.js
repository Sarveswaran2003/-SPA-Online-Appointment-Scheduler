function bookAppointment() {
    // Fetch values from inputs
    var service = document.getElementById('service').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
  
    // Example validation: check if fields are not empty
    if (service && date && time) {
      // Example: send data to server or perform further actions
      console.log('Service: ' + service);
      console.log('Date: ' + date);
      console.log('Time: ' + time);
  
      // Clear form fields (optional)
      document.getElementById('service').value = '';
      document.getElementById('date').value = '';
      document.getElementById('time').value = '';
  
      alert('Appointment booked successfully!');
    } else {
      alert('Please fill out all fields.');
    }
  }
  