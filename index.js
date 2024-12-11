var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer( (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    var pathName = url.parse(req.url).pathname;

    if (pathName === '/') {
        fs.readFile(('./index.html'), function (error, data) {
            if (error) {
                res.writeHead(500);
                res.write('Error');
                return res.end();
            }
            res.write(data);
            return res.end();
        })
    }
    else if (pathName === '/about') {
        fs.readFile(('./about.html'), function(error, data){
            if(error) {
                res.writeHead(500);
                res.write('Error');
                return res.end();
            }
            res.write(data);
            return res.end();
        })
    }
    else if(pathName === '/contact') {
        fs.readFile(('./contact-me.html'), function(error, data){
            if(error) {
                res.writeHead(500);
                res.write('Error');
                return res.end();
            }
            res.write(data);
            return res.end();
        })
    }
    else{
        fs.readFile(('./404.html'), function(error, data){
            if(error) {
                res.writeHead(500);
                res.write('Error');
                return res.end();
            }
            res.write(data);
            return res.end();
        })
    }
}).listen(8080);