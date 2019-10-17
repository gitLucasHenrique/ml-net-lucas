var Sentiment = require('sentiment');
var sentiment = new Sentiment();
var result = sentiment.analyze('that was amazingly stupid');
console.dir(result);    // Score: -2, Comparative: -0.666