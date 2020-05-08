const fs = require('fs');

fs.open('../data/sample.txt','r',(err,fd) => {
  if (err)
    console.error(err);
    else {
      console.log(fd);
    }
})
