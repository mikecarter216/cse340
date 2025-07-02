const express = require('express');
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Optional: serve static files (like CSS, images)
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { title: 'Welcome to EJS Page', message: 'Hello from EJS!' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});