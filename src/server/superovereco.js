const deliveries=require("../data/deliveries.json")

function superovereco(obj){
    newObj={}
    for(let index=0;index<obj.length;index++){
        if(obj[index]["is_super_over"]=="1"){
        const bowler = obj[index]["bowler"]
          if(!newObj[bowler]){
            newObj[bowler]={runs:0,balls:0}
          } 
          newObj[bowler].runs+=parseInt(obj[index]["total_runs"])
          newObj[bowler].balls++
        }
    }
    let bowlereco=[]
    for(let key in newObj){
        const runs =newObj[key].runs
        const balls= newObj[key].balls
        const economy=(runs/balls)*6;
        bowlereco.push({key, economy})
    }
    bowlereco.sort((a,b)=>a.economy-b.economy)
    leastecobowler=bowlereco.slice(0,1)
    console.log(leastecobowler)
}
superovereco(deliveries)