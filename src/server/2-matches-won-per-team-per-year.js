function matchWonPerTeamPerYear(obj) {
  matchesWon = {};
  obj.map((mw) => {
    if (!matchesWon[mw["season"]]) {
      matchesWon[mw["season"]] = {};
    }
    if (mw["winner"] != "") {
      if (!matchesWon[mw["season"]][mw["winner"]]) {
        matchesWon[mw["season"]][mw["winner"]] = 0;
      }
      matchesWon[mw["season"]][mw["winner"]] += 1;
    }
  });
  return matchesWon;
}

module.exports.matchWonPerTeamPerYear = matchWonPerTeamPerYear;
