// // const { fstat } = require('fs');
// // let os=require ('os')

// // console.log(os.type());
// // console.log(os.arch());
// // console.log(os.hostname());
// // console.log(os.getPriority());

// fs.mkdir(path.join(_dirname,"demo_folder"),{},function(err){

//     if(err)
//     throw(err)
//     console.log("file created");
// })

// fs.readfile(path.join(__dirname,"demo_folder","sampletext"),"utf8",function(err,content){

//     if(err)
//     console.log(err);
//     else
//     console.log(content);
// })

// fs.write(path.join(__dirname,"demo_folder","sampletext"),function(arr){

//     if(err)
//     throw err
//     console.log("file create and write");
// })
 
// const http = require("http");
// const {Http2ServerRequest} =  require("http2")
// const fs = require("fs");
// const path = require("path");
// let PORT = process.env.PORT || 5000; //imp

// http.createServer((req, res) => {
//     if (req.url === "/sample") {
//       fs.readFile(
//         path.join(__dirname, "demo_folder", "sample.txt"),"utf8", function (err, data) {
//           if (err) throw err;
//           res.writeHead(200, { "Content-Type": "text/html" });
//           console.log(data);
//           res.end(data);
//         }
//       );
//     } else if (req.url === "/hello") {
//       fs.readFile(path.join(__dirname, "demo_folder", "hello.txt"),"utf8",function (err, data) {
//           if (err) throw err;
//           res.writeHead(200), { "Content-Type": "text/html" };
//           console.log(data);
//           res.end(data);
//         }
//       );
//     }
//   })
//   .listen(5000, () => console.log(`Server running in port ${PORT}`));


// const http = require('http')
// letPORT = 5000;
// http.createServer((req,res)=>{
//     res.write('Hi')
//     res.end()
// }).listen(5000,()=>{
//     console.log('Server Running');
// })