function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
  
    // Simulate login validation (Replace this with your actual login logic)
    if (username === 'user123' && password === 'password123') {
      // Successful login
      errorMessage.textContent = '';
      alert('Login successful!');
      return true;
    } else {
      // Failed login
      errorMessage.textContent = 'Invalid username or password.';
      return false;
    }
  }