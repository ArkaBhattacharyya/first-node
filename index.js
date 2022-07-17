//  const http = require('http');
  const fs = require('fs');
//  const data = require('./data'); 
// http.createServer((req,resp)=>{
//  resp.writeHead(200,{'content-Type':'application\json'});
//  resp.write(JSON.stringify(data))
//  resp.end();
// }).listen(4500);
//console.log(process.argv[3]);
const input = process.argv;
if(input[2] == 'add'){
fs.writeFileSync(input[3],input[4]);
}else if(input[2] == 'remove'){
    fs.unlinkSync(input[3]);
}else{
    console.log('undefine input');
}

