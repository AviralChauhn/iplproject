function strikeRate(obj, objects) {
  const id = obj.reduce((acc, curr) => {
    acc[curr.id] = curr;
    return acc;
  }, {});
  const player = objects.reduce((acc, curr) => {
    const { batsman, batsman_runs, wide_runs, noball_runs, match_id } = curr;
    const wideball = parseInt(wide_runs > 0);
    const noBall = parseInt(noball_runs > 0);
    if (batsman == "V Kohli" && id[match_id]) {
      const season = id[match_id].season;
      acc[season] = acc[season] || { runs: 0, balls: 0 };
      if (!noBall && !wideball) {
        acc[season].runs += parseInt(batsman_runs);
        acc[season].balls += 1;
      }
    }
    return acc;
  }, {});
  const strikerate = Object.entries(player).reduce(
    (acc, [currseason, { runs, balls }]) => {
      const rate = ((runs / balls) * 100).toFixed(2);
      acc[currseason] = parseFloat(rate);
      return acc;
    },
    {}
  );
  return strikerate;
}
module.exports.strikeRate = strikeRate;
