function validateForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
  
    if (!username || !email || !password) {
      errorMessage.textContent = 'All fields are required.';
      return false;
    }
  
    // Additional validation logic can be added here
  
    return true;
  }