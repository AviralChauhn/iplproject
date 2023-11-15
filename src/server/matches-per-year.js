const matches=require("../data/matches")
const fs = require("fs")
function matchesplayed(data){
    let newObj={}
    for(let mat of data){
        if(!newObj[mat["season"]]){
            newObj[mat["season"]]=0;
            
        }
        newObj[mat["season"]]++;
    }
    return newObj
    
}
fs.writeFileSync(
    "../public/output/matchesPerYear.json",
    JSON.stringify(matchesplayed(matches))
  );

console.log(matchesplayed(matches))