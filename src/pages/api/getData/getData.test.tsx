import { getData } from "./getData";

describe("getData", () => {
  it("should fetch data from the given URL", async () => {
    // Arrange
    const url = "https://example.com/data";
    const mockData = { foo: "bar" };
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });

    // Act
    const result = await getData(url);

    // Assert
    expect(global.fetch).toHaveBeenCalledWith(url);
    expect(result).toEqual(mockData);

    // Cleanup
    global.fetch.mockRestore();
  });

  it("should handle errors", async () => {
    // Arrange
    const url = "https://example.com/data";
    const mockError = new Error("Fetch failed");
    jest.spyOn(global, "fetch").mockRejectedValue(mockError);
    console.error = jest.fn();

    // Act
    const result = await getData(url);

    // Assert
    expect(global.fetch).toHaveBeenCalledWith(url);
    expect(result).toBeUndefined();
    expect(console.error).toHaveBeenCalledWith("Fetch error -- ", mockError);

    // Cleanup
    global.fetch.mockRestore();
  });
});
