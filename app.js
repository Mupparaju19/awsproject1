const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// Serve the login page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

// Handle login POST request
app.post('/login', (req, res) => {
  // Here, you would typically handle the login logic (authentication)
  console.log(req.body);  // Log the posted data (e.g., username and password)
  // On successful authentication, redirect to the image
  res.redirect('/success');
});

// Serve an image after successful login
app.get('/success', (req, res) => {
  // Directly serve the image from a public URL
  res.send(`<div style="text-align:center;">
              <h1>Login Successful</h1>
              <img src="https://i.pinimg.com/736x/4b/51/c0/4b51c0251bb3e98257f1a23617bff688.jpg" alt="Welcome Image" style="width:50%;">
            </div>`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
