const matches = require("../data/matches.json")

function tosswins(obj){
    teamwin={}
    for(let index=0;index<obj.length;index++){
        let newObj=obj[index]
        if(obj[index]["winner"]==obj[index]["toss_winner"]){
            if(!teamwin[newObj["winner"]]){
                teamwin[newObj["winner"]]=0;
            }
            teamwin[newObj["winner"]]++;
        }
    }
    
    console.log(teamwin)
}
tosswins(matches)