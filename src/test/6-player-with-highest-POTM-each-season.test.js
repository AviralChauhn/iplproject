const {
  highestPOTM,
} = require("../server/6-player-with-highest-POTM-each-season");
let match = [
  {
    id: "1",
    season: "2021",
    player_of_match: "V Kohli",
  },
];
let match2 = [
  {
    id: "1",
    season: "2021",
    player_of_match: "V Kohli",
  },
  {
    id: "1",
    season: "2022",
    player_of_match: "MS Dhoni",
  },
];
let match3 = [
  {
    id: "1",
    season: "2021",
    player_of_match: "V Kohli",
  },
  {
    id: "2",
    season: "2021",
    player_of_match: "V Kohli",
  },
  {
    id: "1",
    season: "2022",
    player_of_match: "MS Dhoni",
  },
];
let match4 = [
  {
    id: "1",
    season: "2021",
    player_of_match: "V Kohli",
  },
  {
    id: "2",
    season: "2021",
    player_of_match: "V Kohli",
  },
  {
    id: "2",
    season: "2021",
    player_of_match: "S raina",
  },
  {
    id: "1",
    season: "2022",
    player_of_match: "MS Dhoni",
  },
];
let match5 = [
  {
    id: "1",
    season: "2021",
    player_of_match: "V Kohli",
  },
  {
    id: "2",
    season: "2021",
    player_of_match: "V Kohli",
  },
  {
    id: "2",
    season: "2021",
    player_of_match: "S raina",
  },
  {
    id: "1",
    season: "2022",
    player_of_match: "MS Dhoni",
  },
  {
    id: "2",
    season: "2022",
    player_of_match: "R Jadeja",
  },
  {
    id: "3",
    season: "2022",
    player_of_match: "MS Dhoni",
  },
];
describe("highestPOTM", () => {
  test("should return empty object if no data is present", () => {
    expect(highestPOTM([])).toEqual({});
  });
  test("should return single obj", () => {
    expect(highestPOTM(match)).toEqual({ 2021: [["V Kohli", 1]] });
  });
  test("should handle array", () => {
    expect(highestPOTM(match2)).toEqual({
      2021: [["V Kohli", 1]],
      2022: [["MS Dhoni", 1]],
    });
  });
  test("should increase count", () => {
    expect(highestPOTM(match4)).toEqual({
      2021: [["V Kohli", 2]],
      2022: [["MS Dhoni", 1]],
    });
  });
  test("should increase count in array", () => {
    expect(highestPOTM(match5)).toEqual({
      2021: [["V Kohli", 2]],
      2022: [["MS Dhoni", 2]],
    });
  });
});
