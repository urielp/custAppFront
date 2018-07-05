const express = require('express');
const http = require('http');
const path = require('path');


const app = express();

const port = process.env.PORT || 3001;

app.use(express.static(__dirname+'/dist'));

console.log(__dirname+'/dist');

app.get('/*',(req,res) => res.sendFile(path.join(__dirname+'/dist/index.html')));
console.log(__dirname+'/dist/index.html');
const server = http.createServer(app);

server.listen(port,() => console.log('running at : ' +port) );
