const { wonTossWonMatch } = require("../server/5-won-toss-and-won-match");
let match = [
  {
    id: 1,
    toss_winner: "RCB",
    winner: "RCB",
  },
];
let match1 = [
  {
    id: 1,
    toss_winner: "RCB",
    winner: "RCB",
  },
  {
    id: 2,
    toss_winner: "CSK",
    winner: "CSK",
  },
];
let match2 = [
  {
    id: 1,
    toss_winner: "RCB",
    winner: "RCB",
  },
  {
    id: 2,
    toss_winner: "RCB",
    winner: "RCB",
  },
  {
    id: 3,
    toss_winner: "CSK",
    winner: "CSK",
  },
];
describe("wonTossWonMatch", () => {
  test("should return empty object if no data is present", () => {
    expect(wonTossWonMatch([])).toEqual({});
  });
  test("should return single object if single entry", () => {
    expect(wonTossWonMatch(match)).toEqual({ RCB: 1 });
  });
  test("should return single object if single entry", () => {
    expect(wonTossWonMatch(match)).toEqual({ RCB: 1 });
  });
  test("should return multiple object if multiple entry", () => {
    expect(wonTossWonMatch(match1)).toEqual({ RCB: 1, CSK: 1 });
  });
  test("should return multiple object if multiple entry", () => {
    expect(wonTossWonMatch(match2)).toEqual({ RCB: 2, CSK: 1 });
  });
});
