const fs = require ('fs');

/*
const files = fs.readdirSync('/');
console.log(files);
*/

//Writing the async form

fs.readdir('../',function(err,res) {
  if (err)
    console.log("Ahh.. you didn't do it correct duke!");
    else {
      console.log(res);
    }
});

fs.rmdir ('./test',{recursive:true}, (err) => {
  if (err) throw err;
  else {
    console.log("Done creating the dirs..");
  }
});
