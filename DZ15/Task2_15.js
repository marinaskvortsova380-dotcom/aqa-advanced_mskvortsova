import axios from "axios";

export async function testingRequestHeadersParams(URL, headers, params) {
  try {
    const response = await axios.get(URL, { headers, params });
    return response;
  } catch (error) {
    return error.message;
  }
}
