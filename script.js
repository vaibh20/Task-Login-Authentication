function register() {
  const username = document.getElementById('reg-username').value;
  const password = document.getElementById('reg-password').value;

  if (username && password) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    alert("Registered successfully!");
    window.location.href = 'index.html';
  } else {
    alert("Please fill all fields");
  }
}

function login() {
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  const storedUser = localStorage.getItem('username');
  const storedPass = localStorage.getItem('password');

  if (username === storedUser && password === storedPass) {
    localStorage.setItem('loggedIn', true);
    window.location.href = 'dashboard.html';
  } else {
    alert("Invalid credentials!");
  }
}
