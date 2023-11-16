const matches = require("../data/matches.json");

function POTM(obj) {
 const mom=matches.reduce((acc,curr)=>{
    const {season,player_of_match}=curr;
    if(!acc[season]){
        acc[season]={}
    }
    if(!acc[season][player_of_match]){
        acc[season][player_of_match]=0;
    }
    acc[season][player_of_match]++
    return acc;
 },{})
    const sortedData=[];
    const years = Object.keys(mom);
    for (const year of years){
    const sortedEntry=Object.entries(mom[year]).sort(([,a],[,b])=>b-a)
    const [player,max]=sortedEntry[0];
    sortedData.push({Year:year,player})
    }
    
    return sortedData
}
console.log(POTM(matches))

