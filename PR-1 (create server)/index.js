const http = require('http');

const port = 8000;

const reqHanler=(req,res)=>{
    console.log('hello world');
    res.end();
}

const server = http.createServer(reqHanler);

server.listen(port,(err)=>{
    if(!err){
        console.log('server is running..');
    }
    else{
        console.log(err);
        return false;   
    }
    
})