var socket= io();
socket.on('connect', function(){
    console.log('Connected to Server');
});

socket.on('disconnect',function(){
    console.log('Disconnected from server');
});
socket.on('newMessage',(message)=>{
    console.log('Message', message);
});

// socket.on('newEmail', function(email){
//     console.log('New email',email);
// });
