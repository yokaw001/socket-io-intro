let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);
let PORT = 9000;

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

// io.on('connection', function(socket){    
//     console.log('a user connected');
//     socket.on('disconnect', function(){
//         console.log('user disconnected');
//       });
// });

// io.on('connection', function(socket){
//     socket.on('chat message', function(msg){
//       console.log('message: ' + msg);
//     });
//   });

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      io.emit('chat message', msg);
    });
  });

http.listen(PORT, () => {
    console.log('your power level...its over...', PORT)
});