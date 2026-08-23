import { gotoInvalidURL } from "./Task1_15.js";

describe("gotoInvalidURL", () => {
  test("should go to invalid URL", async () => {
    const response = await gotoInvalidURL("");
    expect(response).toContain("Invalid URL Error");
  });
});
