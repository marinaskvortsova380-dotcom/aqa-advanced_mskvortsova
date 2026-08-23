import axios from "axios";
import { jest, test, describe, expect } from "@jest/globals";
import { fetchData } from "./Task3_15.js";

jest.mock('axios');

describe('Task 3: Mocking Axios in Jest', () => {
  test('should fetch data from the given URL (Success)', async () => {
    const mockData = { data: 'mocked data' };
    axios.get.mockResolvedValue(mockData);
    
    const result = await fetchData('https://example.com');
    
    expect(result).toEqual(mockData);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('https://example.com');
  });

  test('should fetch data from the given URL (Failure / Error)', async () => {
    const mockError = new Error('Connection Timeout');

 
    axios.get.mockRejectedValue(mockError);

    const url = "https://api.example.com/bad-endpoint";


    await expect(fetchData(url)).rejects.toThrow("Failed to fetch data");

    try {
      await fetchData(url);
    } catch (error) {
      expect(error.cause).toBe(mockError);
    }
  });
});
