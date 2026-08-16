import axios from "axios";

export async function gotoInvalidURL(InvalidURL) {
  try {
    const response = await axios.get(InvalidURL);
    return response.data;
  } catch (error) {
    return `Щось пішло не так: ${error.message}, "Invalid URL Error"`;
  }
}
