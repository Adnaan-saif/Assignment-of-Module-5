const http= require('http');
const fs= require('fs');

const myServer = http.createServer( (req,res)=>{
    if(req.url=="/"){
        res.writeHead(200,{'Content-type':'text/html'})
        res.write('<h1>This is Home Page</h1>')
        res.end();
    }
    else if(req.url=="/about"){
        res.writeHead(200,{'Content-type':'text/html'})
        res.write('<h1>This is About Page</h1>')
        res.end();
    }
    else if(req.url=="/contact"){
        res.writeHead(200,{'Content-type':'text/html'})
        res.write('<h1>This is Contact Page</h1>')
        res.end();
    } else if(req.url=="/file-write"){
        fs.writeFile('demo.txt','hello world', (error =>{
            if(error){
                res.writeHead(404,{'Content-Type':'text/html'});
                res.write("404 not found");
                res.end();
            }else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("success");
                res.end();
            }
        }))
    }
})

myServer.listen(3000);
console.log("server launched");