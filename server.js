var StaticServer = require('static-server');

var server = new StaticServer({
    rootPath: './dist/',
    port: 4000
});

server.start(function(){
    
})