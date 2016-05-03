var fs = require('fs');
var data = "async write";

fs.writeFile(__dirname + '/file.txt',data,{flag:'a'}, function(error,data){
  if (error){
    return console.error(error.message);
  }
})
