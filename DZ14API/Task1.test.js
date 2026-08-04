import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

axios.interceptors.request.use(
  (config) => {
    console.log(`[OUTGOING REQUEST] ${config.method.toUpperCase()} ${config.url}`);
    if (config.data) {
      console.log("[REQUEST BODY]", config.data);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    console.log(
      `[INCOMING RESPONSE] ${response.status} ${response.config.method.toUpperCase()} ${response.config.url}`
    );
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

describe("JSONPlaceholder API Tests with Jest & Axios", () => {
  test("Test 1: GET /posts/1 (should successfully fetch post)", async () => {
    const response = await axios.get(`${BASE_URL}/posts/1`);

    expect(response.status).toBe(200);
    expect(response.data.id).toBe(1);
    expect(typeof response.data.title).toBe("string");
  });

  test("Test 2: GET /users/1 (should return correct user details)", async () => {
    const response = await axios.get(`${BASE_URL}/users/1`);

    expect(response.status).toBe(200);
    expect(response.data.id).toBe(1);
    expect(response.data.name).toBe("Leanne Graham");
  });

  test("Test 3: GET /posts/1/comments (should return comments array for post 1)", async () => {
    const response = await axios.get(`${BASE_URL}/posts/1/comments`);

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);

    response.data.forEach((comment) => {
      expect(comment.postId).toBe(1);
    });
  });

  test("Test 4: POST /posts (should successfully create a new post)", async () => {
    const newPostData = {
      title: "Some information",
      body: "Some text",
      userId: 39,
    };

    const response = await axios.post(`${BASE_URL}/posts`, newPostData);

    expect(response.status).toBe(201);
    expect(response.data.title).toBe(newPostData.title);
  });

  test("Test 5: GET /photos (should retrieve photos filtered by thumbnailUrl)", async () => {
    const response = await axios.get(`${BASE_URL}/photos`, {
      params: { thumbnailUrl: "https://via.placeholder.com/150/92c952" },
    });

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
  });
});
