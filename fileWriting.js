const fs = require('fs');

const data = "Hi,this is newFile.txt";


fs.mkdir("./myFolder", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Folder Created Successfully");
  }
});


fs.writeFile('./myFolder/myFile.txt', data, (err)=> {
    if(err){
        console.log(err);
        return;
    } else {
    	console.log('Written to file successfully!');
    }
})