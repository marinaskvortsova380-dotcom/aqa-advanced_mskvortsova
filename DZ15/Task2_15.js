const axios = require("axios");

async function requestWithHeadersAndParams(url, headers, params) {
  try {
    const response = await axios.get(url, {
      headers: headers,
      params: params
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to request headers and params", { cause: error });
  }
}

if (typeof describe === 'undefined') {
  (async () => {
    const url = "https://postman-echo.com/get";
    const headers = { "x-custom-header": "my-header-value" };
    const params = { myParam: "my-param-value" };
    
    console.log("Запуск функції requestWithHeadersAndParams");
    try {
      const data = await requestWithHeadersAndParams(url, headers, params);
      console.log(data);
    } catch (error) {
      console.error("Помилка:", error);
    }
  })();
} else {
  describe("Testing Request Headers and Params", () => {
    test("перевірка, що сервер отримав заголовки та параметри", async () => {
      const url = "https://postman-echo.com/get";
      const headers = { "x-custom-header": "my-header-value" };
      const params = { myParam: "my-param-value" };

      const data = await requestWithHeadersAndParams(url, headers, params);

      expect(data.args.myParam).toBe("my-param-value");
      expect(data.headers["x-custom-header"]).toBe("my-header-value");
    });
  });
}
