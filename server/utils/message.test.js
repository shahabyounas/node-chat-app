var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', ()=>{
    it('should generate correct message object',()=>{
        // store res in variable
        var from     = 'Jen';
        var text     = 'Message, hey hello';
        var message  = generateMessage(from,text);

       expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from,text});
    });
});