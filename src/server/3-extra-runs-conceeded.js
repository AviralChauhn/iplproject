function extraRunsConceeded(obj, objects) {
  newObj = {};
  let matchid = [];
  obj.map((m) => {
    if (m["season"] == "2016") {
      matchid.push(m["id"]);
    }
  });
  let extraruns = objects
    .filter((delivery) => matchid.includes(delivery["match_id"]))
    .reduce((acc, curr) => {
      const team = curr["bowling_team"];
      acc[team] = (acc[team] ?? 0) + parseInt(curr["extra_runs"]);
      return acc;
    }, {});
  return extraruns;
}
module.exports.extraRunsConceeded = extraRunsConceeded;
