function matchesPerYear(obj) {
  let newObj = {};
  const matches = obj.map((m) => {
    if (!newObj[m["season"]]) {
      newObj[m["season"]] = 0;
    }
    newObj[m["season"]]++;
  });
  return newObj;
}
module.exports.matchesPerYear = matchesPerYear;
