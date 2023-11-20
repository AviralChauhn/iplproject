function superOverEconomy(obj) {
  const superOverEco = obj
    .filter((m) => m["is_super_over"] == 1)
    .reduce((acc, curr) => {
      let bowler = curr["bowler"];
      acc[bowler] = acc[bowler] ?? { runs: 0, balls: 0 };
      acc[bowler].runs += parseInt(curr["total_runs"]);
      acc[bowler].balls += 1;
      return acc;
    }, {});
  let superecobowler = [];
  Object.entries(superOverEco).map(([bowler, data]) => {
    let run = data.runs;
    let ball = data.balls;
    let eco = (run / ball) * 6;
    superecobowler.push({ bowler, economy: eco.toFixed(2) });
  });
  superecobowler.sort((a, b) => a.economy - b.economy);
  return superecobowler.slice(0, 1);
}
module.exports.superOverEconomy = superOverEconomy;
