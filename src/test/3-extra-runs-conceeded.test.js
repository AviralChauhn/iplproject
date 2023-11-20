const { extraRunsConceeded } = require("../server/3-extra-runs-conceeded");
const Matches = [
  { season: "2016", id: "1" },
  { season: "2019", id: "2" },
];
const Deliveries = [
  { match_id: "1", extra_runs: "5", bowling_team: "CSK" },
  { match_id: "2", extra_runs: "1", Bowling_team: "CSK" },
];
const Matches2 = [
  { season: "2016", id: "1" },
  { season: "2019", id: "2" },
  { season: "2020", id: "3" },
];
const Deliveries2 = [
  { match_id: "1", extra_runs: "9", bowling_team: "RCB" },
  { match_id: "2", extra_runs: "8", Bowling_team: "RCB" },
  { match_id: "3", extra_runs: "7", Bowling_team: "RCB" },
];
const Matches3 = [
  { season: "2016", id: "1" },
  { season: "2019", id: "2" },
  { season: "2020", id: "3" },
  { season: "2021", id: "4" },
];
const Deliveries3 = [
  { match_id: "1", extra_runs: "10", bowling_team: "SRH" },
  { match_id: "2", extra_runs: "8", Bowling_team: "SRH" },
  { match_id: "3", extra_runs: "7", Bowling_team: "SRH" },
  { match_id: "4", extra_runs: "4", Bowling_team: "SRH" },
];
const Matches4 = [
  { season: "2016", id: "1" },
  { season: "2016", id: "2" },
  { season: "2020", id: "3" },
  { season: "2021", id: "4" },
];
const Deliveries4 = [
  { match_id: "1", extra_runs: "3", bowling_team: "PBKS" },
  { match_id: "2", extra_runs: "2", bowling_team: "RCB" },
  { match_id: "3", extra_runs: "7", bowling_team: "PBKS" },
  { match_id: "4", extra_runs: "4", bowling_team: "PBKS" },
];
describe("extraRunsConceeded", () => {
  test("should return empty object if no data is present", () => {
    expect(extraRunsConceeded([], [])).toEqual({});
  });
  test("should return extra runs conceeded in 2016 only", () => {
    expect(extraRunsConceeded(Matches, Deliveries)).toEqual({ CSK: 5 });
  });
  test("should return extra runs conceeded in 2016 only with change team", () => {
    expect(extraRunsConceeded(Matches2, Deliveries2)).toEqual({ RCB: 9 });
  });
  test("should return extra runs above single digit", () => {
    expect(extraRunsConceeded(Matches3, Deliveries3)).toEqual({ SRH: 10 });
  });
  test("should handle array", () => {
    expect(extraRunsConceeded(Matches4, Deliveries4)).toEqual({
      PBKS: 3,
      RCB: 2,
    });
  });
});
