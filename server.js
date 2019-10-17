const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 80;
const Sentiment = require('sentiment');
const sentiment = new Sentiment();

app.use('/css',express.static(path.join(__dirname, 'public/css')));
app.use('/fonts',express.static(path.join(__dirname, 'public/fonts')));
app.use('/img',express.static(path.join(__dirname, 'public/images')));
app.use('/img/loaders',express.static(path.join(__dirname, 'public/images/loaders')));
app.use('/js',express.static(path.join(__dirname, 'public/js')));

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/checkAnswer',function(req,res) {
  if (req.query.sentence){
    let result = sentiment.analyze(req.query.sentence)
    console.log(result.score)
    if (result.score > 0){
      res.send(JSON.stringify({ isPositive: true }));
    }else{
      res.send(JSON.stringify({ isPositive: false }));
    }
  }else{
    res.send(JSON.stringify({ isPositive: false }));
  }
  
});

app.listen(PORT, () => {
  console.log('Server is running at:',PORT);
});