function topEcoBowler(obj, objects) {
  let matchid = obj.filter((m) => m.season === "2015").map((m) => m.id);
  let runsmade = objects
    .filter((m) => matchid.includes(m["match_id"]))
    .reduce((acc, curr) => {
      let bowler = curr["bowler"];
      acc[bowler] = acc[bowler] ?? { runs: 0, balls: 0 };
      acc[bowler].runs += parseInt(curr["total_runs"]) || 0;
      acc[bowler].balls += 1;
      return acc;
    }, {});

  let ecobowler = [];
  Object.entries(runsmade).map(([bowler, data]) => {
    let run = data.runs;
    let ball = data.balls;
    let eco = (run / ball) * 6;
    ecobowler.push({ bowler, economy: eco.toFixed(2) });
  });
  ecobowler.sort((a, b) => a.economy - b.economy);
  return ecobowler.slice(0, 10);
}
module.exports.topEcoBowler = topEcoBowler;
