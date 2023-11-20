const {
  matchWonPerTeamPerYear,
} = require("../server/2-matches-won-per-team-per-year");
let matches = [
  {
    id: "1",
    season: "2019",
    winner: "Royal Challengers Bangalore",
  },
  {
    id: "2",
    season: "2020",
    winner: "Chennai Super Kings",
  },
];
let matches2 = [
  {
    id: "1",
    season: "2019",
    winner: "RCB",
  },
  {
    id: "2",
    season: "2019",
    winner: "RCB",
  },
  {
    id: "4",
    season: "2020",
    winner: "RCB",
  },
  {
    id: "3",
    season: "2020",
    winner: "Chennai Super Kings",
  },
];
let matches4 = [
  {
    id: "1",
    season: "2019",
    winner: "RCB",
  },
  {
    id: "2",
    season: "2019",
    winner: "RCB",
  },
  {
    id: "4",
    season: "2020",
    winner: "RCB",
  },
  {
    id: "3",
    season: "2020",
    winner: "Chennai Super Kings",
  },
  {
    id: "5",
    season: "2021",
    winner: "Chennai Super Kings",
  },
];
let matches3 = [
  {
    id: "1",
    season: "2019",
    winner: "Royal Challengers Bangalore",
  },
  {
    id: "2",
    season: "2020",
    winner: "Chennai Super Kings",
  },
  {
    id: "3",
    season: "2020",
    winner: "",
  },
];
describe("matchWonPerTeamPerYear", () => {
  test("should return empty object if no data is present ", () => {
    expect(matchWonPerTeamPerYear([])).toEqual({});
  });
  test("should return teams and counts in different season correctly", () => {
    expect(matchWonPerTeamPerYear(matches)).toEqual({
      2019: { "Royal Challengers Bangalore": 1 },
      2020: { "Chennai Super Kings": 1 },
    });
  });
  test("should return teams and counts in different season correctly also increment the count number if more matches are won", () => {
    expect(matchWonPerTeamPerYear(matches2)).toEqual({
      2019: { RCB: 2 },
      2020: { RCB: 1, "Chennai Super Kings": 1 },
    });
  });
  test("should not print anything is there is no winner", () => {
    expect(matchWonPerTeamPerYear(matches3)).toEqual({
      2019: { "Royal Challengers Bangalore": 1 },
      2020: { "Chennai Super Kings": 1 },
    });
  });
  test("handle array", () => {
    expect(matchWonPerTeamPerYear(matches4)).toEqual({
      2019: { RCB: 2 },
      2020: { RCB: 1, "Chennai Super Kings": 1 },
      2021: { "Chennai Super Kings": 1 },
    });
  });
});
