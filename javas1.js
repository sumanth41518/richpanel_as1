document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    // Here you would typically handle the login process, such as sending the email and password to a server.
    // For the sake of this example, let's just log them to the console.
    console.log('Email:', email);
    console.log('Password:', password);
  });