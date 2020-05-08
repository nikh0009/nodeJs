require('dotenv').config();
const http = require ('http');
const fs = require ('fs');

// const server = http.createServer((req,res) => {
//   fs.readFile("../data/sample.txt","utf8",(err,data) =>{
//     if (err){
//       console.log(err);
//     }
//     else {
//       res.end(data);
//     }
//   });
// });

//Doing the same stuff using streams
http.createServer((req,res) =>{
  const stream = fs.createReadStream("../data/sample.txt","utf8");
  stream.pipe(res);
}).listen(process.env.PORT, () => {
  console.log(`Server running at ${process.env.PORT}`);
});
