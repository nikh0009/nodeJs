const fs = require('fs');

fs.readFile("../data/sample.txt",(err,data) => {
  if (err)
    console.log(err);
    else {
      console.log(data.slice(0,1234).toString());
      console.log("Done..");
    }
});
