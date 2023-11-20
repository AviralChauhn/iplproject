const { matchesPerYear } = require("../server/1-matches-per-year");
let matches = [
  {
    id: "1",
    season: "2019",
  },
  {
    id: "2",
    season: "2020",
  },
];
let matches2 = [
  {
    id: "1",
    season: "2019",
  },
  {
    id: "2",
    season: "2019",
  },
  {
    id: "3",
    season: "2020",
  },
];
let matches3 = [
  {
    id: "1",
    season: "2019",
  },
  {
    id: "2",
    season: "2019",
  },
  {
    id: "3",
    season: "2020",
  },
  {
    id: "4",
    season: "2020",
  },
];
let matches4 = [
  {
    id: "1",
    season: "2019",
  },
  {
    id: "2",
    season: "2019",
  },
  {
    id: "3",
    season: "2020",
  },
  {
    id: "4",
    season: "2020",
  },
  {
    id: "5",
    season: "2021",
  },
];
describe("matchesPerYear", () => {
  test("no. of matches held per year", () => {
    expect(matchesPerYear(matches)).toEqual({ 2019: 1, 2020: 1 });
  });
  test("should return empty object in case in no data", () => {
    expect(matchesPerYear([])).toEqual({});
  });
  test("should return increased count if more matches have same season", () => {
    expect(matchesPerYear(matches2)).toEqual({ 2019: 2, 2020: 1 });
  });
  test("should return increased count if more matches have same season", () => {
    expect(matchesPerYear(matches3)).toEqual({ 2019: 2, 2020: 2 });
  });
  test("should return increased count if more matches have same season", () => {
    expect(matchesPerYear(matches4)).toEqual({ 2019: 2, 2020: 2, 2021: 1 });
  });
});
