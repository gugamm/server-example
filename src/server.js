var express = require('express');
var path = require('path');

var app = express();

//serve static files
app.use(express.static(path.resolve(__dirname, "assets")));

//set pug as template library
app.set('view engine', 'pug');

//set view directory
app.set('views', path.resolve(__dirname, 'views'));

app.get('/*', function (req, res) {
  res.render('index', {
    title: 'Example app',
    text: 'Hello World Box'
  });
});

app.listen(3000, function () {
  console.log('Listening to port 3000');
});
