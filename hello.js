var http = require("http");
http.createServer(function(request,response){
    response.write("welcome");
    response.end();
}).listen(5000);
