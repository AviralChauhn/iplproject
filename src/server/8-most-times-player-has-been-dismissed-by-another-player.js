function dismissedPlayer(objects) {
  const dismissalBowler = objects
    .map((match) => ({
      batsman: match["batsman"],
      playerDismissed: match["player_dismissed"],
      bowler: match["bowler"],
      dismissalKind: match["dismissal_kind"],
    }))
    .filter(
      (match) =>
        match.dismissalKind !== "run out" &&
        match.dismissalKind !== "retired hurt"
    )
    .filter((match) => match.batsman === match.playerDismissed)
    .reduce((acc, curr) => {
      if (!acc[curr.batsman]) {
        acc[curr.batsman] = {};
      }
      if (!acc[curr.batsman][curr.bowler]) {
        acc[curr.batsman][curr.bowler] = 0;
      }
      acc[curr.batsman][curr.bowler] += 1;
      return acc;
    }, {});
  let maxDismissal = 0;
  const max = Object.entries(dismissalBowler).reduce((acc, curr) => {
    Object.entries(curr[1]).map((player) => {
      let currDismissed = player[1];
      if (currDismissed > maxDismissal) {
        maxDismissal = currDismissed;
        acc = {};
        acc[curr[0]] = {};
        acc[curr[0]][player[0]] = player[1];
      } else if (currDismissed == maxDismissal) {
        acc[curr[0]] = {};
        acc[curr[0]][player[0]] = player[1];
      }
    }, {});
    return acc;
  }, {});
  return max;
}
module.exports.dismissedPlayer = dismissedPlayer;
