const axios = require(`axios`);
async function gotoInvalidURL (InvalidURL) {
    try {
        const response = await axios.get(InvalidURL);
        return response.data;
    }catch(error) {
        return `Щось пішло не так: ${error.message}, "Invalid URL Error"`;
    }
}   
        
describe("gotoInvalidURL", () => {
  test("should go to invalid URL", async () => {
    const response = await gotoInvalidURL("");
    expect(response).toContain("Invalid URL Error");
  });
});
