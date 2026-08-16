import { testingRequestHeadersParams } from "./Task2_15.js";

describe("testingRequestHeadersParams", () => {
  test("should test request headers and params", async () => {
    const response = await testingRequestHeadersParams(
      "https://swapi.info/api/films",
      { "x-custom-Header1": "123" },
      { year: 1977 }
    );
    expect(response.config.headers.get("x-custom-Header1")).toBe("123");
    expect(response.config.params["year"]).toBe(1977);
  });
});
