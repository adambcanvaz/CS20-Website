function updateDateTime() {
    const now = new Date();
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      hour: 'numeric', 
      minute: 'numeric', 
      second: 'numeric',
      timeZoneName: 'short' 
    };
    const dateTimeString = now.toLocaleDateString('en-US', options);
    document.getElementById("current-datetime").textContent = dateTimeString;
  }
  
  updateDateTime();
  setInterval(updateDateTime, 1000);