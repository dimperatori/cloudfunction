const c = require('./function-1.js');

const fs = require('fs');

const requestBuffer = fs.readFileSync('./data.json', "utf8");
const requestJSON = requestBuffer.toString().trim();

//Parse file in object
const event = JSON.parse(requestJSON);

dataJSON = JSON.stringify(event.data);
//Encode data in Base64
event.data = Buffer.from(dataJSON).toString('base64');

c.helloPubSub(event, 'this is the context');