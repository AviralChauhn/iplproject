const matchess = require("../data/matches")
const fs = require("fs")
function matcheswon(obj){
    let mw ={}
    for(let key of obj){
        if(!mw[key['season']]){
            mw[key['season']]={}
        }
            if(!mw[key['season']][key['winner']]){
                mw[key['season']][key['winner']]=0
            }
            mw[key['season']][key['winner']]++
    }
    return mw;
}
fs.writeFileSync(
    "../public/output/matches-Won-Per-Team-Per-Year.json",
    JSON.stringify(matcheswon(matchess))
  );

console.log(matcheswon(matchess))