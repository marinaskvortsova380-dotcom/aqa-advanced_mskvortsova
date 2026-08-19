import axios from "axios";
import { jest } from "@jest/globals";
import { fetchData } from "./Task3_15.js";
describe("Task 3: Mocking Axios in Jest", () => {
  let getSpy;

  beforeEach(() => {
    getSpy = jest.spyOn(axios, "get");
  });

  afterEach(() => {
    getSpy.mockRestore();
  });

  test("Успішний HTTP-запит (Success)", async () => {
    const mockResponseData = { success: true, data: "Mocked User Data" };

    getSpy.mockResolvedValue({ data: mockResponseData });

    const url = "https://api.example.com/data";
    const result = await fetchData(url);


    expect(result).toEqual(mockResponseData);


    expect(getSpy).toHaveBeenCalledTimes(1);
    expect(getSpy).toHaveBeenCalledWith(url);
  });

  test("Неуспішний HTTP-запит (Failure / Error)", async () => {
    const mockError = new Error("Connection Timeout");

 
    getSpy.mockRejectedValue(mockError);

    const url = "https://api.example.com/bad-endpoint";


    await expect(fetchData(url)).rejects.toThrow("Failed to fetch data");

    try {
      await fetchData(url);
    } catch (error) {
      expect(error.cause).toBe(mockError);
    }
  });
});
