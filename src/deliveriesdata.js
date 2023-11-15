const csvtojson = require('csvtojson');
const fs= require('fs');
const csvFileName='deliveries.cs';
const csvFilePath= "data/deliveries.csv";

csvtojson()
.fromFile(csvFilePath)
.then((jsonArrayObj)=>{
    const jsonFileName= 'deliveries.json';
    const jsonFilePath="data/deliveries.json"

fs.writeFileSync(jsonFilePath,JSON.stringify(jsonArrayObj,null,2));
console.log('Conversion completed! JSON file saved:',jsonFileName)
})
.catch((err)=>console.log(err))