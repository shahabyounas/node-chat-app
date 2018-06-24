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

        socket.emit('newMessage',{
            from: 'Admin',
            text : 'Welcome to chat app',
            createdAt: new Date().getTime()
        });

        socket.broadcast.emit('newMessage',{
        from: 'Admin',
        text : 'New user joined',
        createdAt: new Date().getTime()
        });

   socket.on('createMessage',function(message){
       console.log('createMessage',message);
       io.emit('newMessage', {
        from:message.from,
        text:message.text,
        createdAt : new Date().getTime()
      });
    // socket.broadcast.emit('newMessage',{
    //         from:message.from,
    //         text:message.text,
    //         createdAt : new Date().getTime()
    // });
   });

   socket.on('disconnect', ()=>{
       console.log("User was disconnected");
   });

});

server.listen(port,()=>{
    console.log(`Server is up on port ${port}`)
})
//console.log(publicPath)