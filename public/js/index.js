var socket= io();
socket.on('connect', function(){
    console.log('Connected to Server');
    
    socket.emit('createMessage',{
        from:'browser chrome',
        text : 'I am chrome client sending you message'
    });
    
    // socket.emit('createEmail',{
    //     to :'jena@example.com',
    //     text : 'hi, create email event'
    // });
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
