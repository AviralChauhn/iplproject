const deliveries = require("../data/deliveries.json")
const matches= require("../data/matches.json")
function top10ecobowlers(obj,object){
    ecobowler={}
    let matchids=[]
    for(index=0;index<obj.length;index++){
        if(obj[index]["season"]=="2015"){
            matchids.push(obj[index]["id"])
        }
    }
    for(let index=0;index<object.length;index++){
        let newObj=object[index];
        for(let i=0;i<matchids.length;i++){
            let a=matchids[i]
            if(newObj["match_id"]==a){
                if(!ecobowler[newObj["bowler"]]){
                    ecobowler[newObj["bowler"]]={runs:0,balls:0}
                }
                ecobowler[newObj["bowler"]].runs+=parseInt(newObj["total_runs"])
                ecobowler[newObj["bowler"]].balls+=1;
            }
        
        }
    }
    let bowlerArray =[]
    for(let key in ecobowler){
        let runs=ecobowler[key].runs
        let balls=ecobowler[key].balls
        let economy=(runs/balls)*6
        bowlerArray.push({key, economy})
    }
    bowlerArray.sort((a, b) => a.economy - b.economy);
    top10=bowlerArray.slice(0,10)
    console.log(top10)
   
}
top10ecobowlers(matches,deliveries)