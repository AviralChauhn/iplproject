const matches = require("./data/matches.json");
const deliveries = require("./data/deliveries.json");
const { matchesPerYear } = require("./server/1-matches-per-year");
const {
  matchWonPerTeamPerYear,
} = require("./server/2-matches-won-per-team-per-year");
const { extraRunsConceeded } = require("./server/3-extra-runs-conceeded");
const { topEcoBowler } = require("./server/4-top-10-economical-bowler");
const { wonTossWonMatch } = require("./server/5-won-toss-and-won-match");
const { superOverEconomy } = require("./server/9-bowler-with-best-economy");
const {
  highestPOTM,
} = require("./server/6-player-with-highest-POTM-each-season");
const {
  strikeRate,
} = require("./server/7-strike-rate-of-a-batsman-each-season");
const {
  dismissedPlayer,
} = require("./server/8-most-times-player-has-been-dismissed-by-another-player");
const fs = require("fs");
fs.writeFileSync(
  "./public/output/matchesPerYear.json",
  JSON.stringify(matchesPerYear(matches), null, 2)
);
fs.writeFileSync(
  "./public/output/matchWonPerTeamPerYear.json",
  JSON.stringify(matchWonPerTeamPerYear(matches), null, 2)
);
fs.writeFileSync(
  "./public/output/extraRunsConceeded.json",
  JSON.stringify(extraRunsConceeded(matches, deliveries), null, 2)
);
fs.writeFileSync(
  "./public/output/topEcoBowler.json",
  JSON.stringify(topEcoBowler(matches, deliveries), null, 2)
);
fs.writeFileSync(
  "./public/output/wonTossWonMatch.json",
  JSON.stringify(wonTossWonMatch(matches), null, 2)
);
fs.writeFileSync(
  "./public/output/highestPOTM.json",
  JSON.stringify(highestPOTM(matches), null, 2)
);
fs.writeFileSync(
  "./public/output/strikeRate.json",
  JSON.stringify(strikeRate(matches, deliveries), null, 2)
);
fs.writeFileSync(
  "./public/output/dismissedPlayer.json",
  JSON.stringify(dismissedPlayer(deliveries), null, 2)
);
fs.writeFileSync(
  "./public/output/dismissedPlayer.json",
  JSON.stringify(dismissedPlayer(deliveries), null, 2)
);
fs.writeFileSync(
  "./public/output/superOverEconomy.json",
  JSON.stringify(superOverEconomy(deliveries), null, 2)
);
// console.log(matchWonPerTeamPerYear(matches4));

// console.log(extraRunsConceeded(Matches2, Deliveries2));
// console.log(topEcoBowler(matches, deliveries));
// console.log(wonTossWonMatch(matches2));
// console.log(superOverEconomy(deliveries));
// console.log(highestPOTM(match3));
// console.log(strikeRate(matches, deliveries));
// console.log(dismissedPlayer(deliveries));
