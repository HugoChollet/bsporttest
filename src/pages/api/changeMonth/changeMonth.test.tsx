import { changeMonth } from "./changeMonth";

describe("changeMonth", () => {
  it("should return the expected date range", () => {
    const currentDate = new Date("2023-03-27T12:00:00Z");
    const startDate = new Date("2023-02-27T12:00:00Z");
    const endDate = new Date("2023-04-27T12:00:00Z");
    const expected = "2023-02-27&max_date=2023-04-27";

    const result = changeMonth({ currentDate, startDate, endDate });

    expect(result).toEqual(expected);
  });
});
