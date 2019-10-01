const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT = 80;

app.use('/css',express.static(path.join(__dirname, 'public/css')));
app.use('/fonts',express.static(path.join(__dirname, 'public/fonts')));
app.use('/img',express.static(path.join(__dirname, 'public/images')));
app.use('/img/loaders',express.static(path.join(__dirname, 'public/images/loaders')));
app.use('/js',express.static(path.join(__dirname, 'public/js')));

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log('Server is running at:',PORT);
});