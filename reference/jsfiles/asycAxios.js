var axios = require('axios');
var post = undefined;

axios.get('https://jsonplaceholder.typicode.com/posts')
.then((res)=>{
  post = res.data;
});
