/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
// Import execFile, to run our bash script
var execFile = require('child_process').execFile;

var app = express();

// all environments
app.set('port', process.env.PORT || 9001);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/hello', function (req, res) {
  res.send('HELLO HELLOW');
})

app.post('/', function (req, res) {
  // console.log(req);
  var payload = req.body && req.body.payload ? JSON.parse(req.body.payload) : null;


  console.log('payload', payload)

  execFile('./hook.sh', function(error, stdout, stderr) {
        // Log success in some manner
    console.log(error, stdout, stderr, 'exec complete' );

    // stdout.on('data', function (data) {
    //   console.log(data);
    // })
  });


  res.send(200, 'ok');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

