function highestPOTM(obj) {
  const potm = {};
  obj.map((m) => {
    if (!potm[m["season"]]) {
      potm[m[["season"]]] = {};
    }
    if (!potm[m["season"]][m["player_of_match"]]) {
      potm[m["season"]][m["player_of_match"]] = 0;
    }
    potm[m["season"]][m["player_of_match"]] += 1;
  });
  years = Object.entries(potm);
  const result = years.reduce((acc, [season, players]) => {
    const sortedPlayers = Object.entries(players).sort((a, b) => b[1] - a[1]);
    acc[season] = sortedPlayers.slice(0, 1);
    return acc;
  }, {});
  return result;
}
module.exports.highestPOTM = highestPOTM;
