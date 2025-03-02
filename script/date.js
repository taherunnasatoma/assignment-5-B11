function formatDate() {
  const options = {
      weekday: 'short', 
      year: 'numeric',   
      month: 'long',     
      day: 'numeric'     
  };
  
  const currentDate = new Date();
  return currentDate.toLocaleDateString('en-US', options);
}

document.getElementById('datetime').textContent = formatDate();
