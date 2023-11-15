const deliveriess=require("../data/deliveries")
const matchess = require("../data/matches")
function extraruns(data,datadel){
    let extra={}
    let matchid=[]
    for(let i=0; i<data.length; i++){
        if(data[i]["season"] === "2016"){
            matchid.push(data[i]["id"]);
        }
    }
    for(let index=0;index<datadel.length;index++){
        let newVAr=datadel[index]
        for(let i=0;i<matchid.length;i++){
            if(newVAr["match_id"]==matchid[i]){
               if(!extra[newVAr["bowling_team"]]){
                extra[newVAr["bowling_team"]]=0
               }
               extra[newVAr["bowling_team"]]+= parseInt(newVAr["extra_runs"])
            }
        }
    }    
    return extra
}
console.log(extraruns(matchess,deliveriess))