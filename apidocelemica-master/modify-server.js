//Command to run the file : node modify-server.js
const fs = require('fs');


// Define a function to recursively search for JSON files in a directory
function getJsonFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
  
    files.forEach((file) => {
      const filePath = `${dir}/${file}`;
      const stat = fs.statSync(filePath);
  
      if (stat.isDirectory()) {
        getJsonFiles(filePath, fileList);
      } else if (file.endsWith('.json')) {
        fileList.push(filePath);
      }
    });
  
    return fileList;
  }


//This is the function to modify the server url 

function modifyServer(staticFiles,url){
staticFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const swaggerDocument = JSON.parse(content);
   swaggerDocument.hasOwnProperty("servers")?swaggerDocument.servers[0].url= 'https://'+url+'/api': swaggerDocument.host= url;
  const updatedContent = JSON.stringify(swaggerDocument, null, 2);
  fs.writeFileSync(file,updatedContent, 'utf8');
});
}


module.exports = {
    getJsonFiles,modifyServer
  };