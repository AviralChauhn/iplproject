const csvtojson = require('csvtojson');
const fs= require('fs');
const csvFileName='matches.cs';
const csvFilePath= "data/matches.csv";

csvtojson()
.fromFile(csvFilePath)
.then((jsonArrayObj)=>{
    const jsonFileName= 'matches.json';
    const jsonFilePath="data/matches.json"

fs.writeFileSync(jsonFilePath,JSON.stringify(jsonArrayObj,null,2));
console.log('Conversion completed! JSON file saved:',jsonFileName)
})
.catch((err)=>console.log(err))