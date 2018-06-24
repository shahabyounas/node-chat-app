const path          = require('path');
const http2         = require('http');
const express       = require('express');
const socketIO      = require('socket.io');
const publicPath    = path.join(__dirname + '/../public');
const port          = process.env.PORT  || 3000;
var   app           = express();
var   server        = http2.createServer(app);
var   io            = socketIO(server); 

app.use(express.static(publicPath));

io.on('connection', (socket)=>{
   console.log('New User connected');

//    socket.emit('newEmail',{
//        from : 'jake',
//        text : 'This is email body',
//        created_at : new Date()
//    });

   socket.emit('newMessage', {
    from:'Ali',
    text: 'Hey, what are you writing about?',
    createdAt : new Date()
  });

   socket.on('createMessage',function(message){
       console.log('createMessage',message);
   });

    // socket.on('createEmail', (newEmail)=>{
    //    console.log('createEmail', newEmail);
    // });

   socket.on('disconnect', ()=>{
       console.log("User was disconnected");
   });

});

server.listen(port,()=>{
    console.log(`Server is up on port ${port}`)
})
//console.log(publicPath)