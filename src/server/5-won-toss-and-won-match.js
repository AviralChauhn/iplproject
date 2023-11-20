function wonTossWonMatch(obj) {
  return obj
    .filter((match) => match["toss_winner"] === match["winner"])
    .reduce((acc, curr) => {
      let win = curr["winner"];
      acc[win] = (acc[win] ?? 0) + 1;
      return acc;
    }, {});
}
module.exports.wonTossWonMatch = wonTossWonMatch;
