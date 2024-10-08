document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Simple validation
    if (email === "" || password === "") {
      alert("Please fill in both fields");
      return;
    }
  
    // Simulating login (add your actual logic here)
    alert("Login Successful!");
  });
  