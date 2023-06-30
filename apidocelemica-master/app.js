const express = require('express')
const modify = require('./modify-server');
const app = express()

/* If User does not needs to modify the server url then comment the code from line 7 to 14 */
// Get a list of all the JSON files in the swagger directory and its subdirectories
const staticFiles = modify.getJsonFiles('./public/static');

 //Update new server URL
 // ELEMICA TEST1: xcdemo.myxcarrier.com/uat/xCarrierAPI
 //ELEMICA TEST2: xcdemo.myxcarrier.com:8443
 // BA TEST: elemica.xcarrier.test 
const url='xcdemo.myxcarrier.com:8443';

modify.modifyServer(staticFiles,url)

app.use(express.static("public"))
app.listen(3000)