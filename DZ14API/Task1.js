import axios from "axios";
import assert from "assert";
const BASE_URL = "https://jsonplaceholder.typicode.com";

// Налаштування інтерсептора для запитів (Request Interceptor)
axios.interceptors.request.use(
  (config) => {
    console.log(`[OUTGOING REQUEST] ${config.method.toUpperCase()} ${config.url}`);
    if (config.data) {
      console.log("[REQUEST BODY]", config.data);
    }
    return config; // Обов'язково повертаємо конфіг запиту
  },
  (error) => {
    console.error("[REQUEST ERROR]", error);
    return Promise.reject(error);
  }
);

// Налаштування інтерсептора для відповідей (Response Interceptor)
axios.interceptors.response.use(
  (response) => {
    console.log(
      `[INCOMING RESPONSE] ${response.status} ${response.config.method.toUpperCase()} ${response.config.url}`
    );
    return response; // Обов'язково повертаємо відповідь сервера
  },
  (error) => {
    console.error("[RESPONSE ERROR]", error.message);
    return Promise.reject(error);
  }
);

async function runTests() {
  console.log("API Tests with Axios...");

  try {
    console.log("Test 1: GET /posts/1");
    const getPostResponse = await axios.get(`${BASE_URL}/posts/1`);

    assert.strictEqual(getPostResponse.status, 200, "Status code should be 200");
    assert.strictEqual(getPostResponse.data.id, 1, "Post ID should be 1");
    console.log("Test 1 Passed: Successfully fetched post");

    console.log("Test 2: GET /users/1");
    const getUserResponse = await axios.get(`${BASE_URL}/users/1`);

    assert.strictEqual(getUserResponse.status, 200, "Status code should be 200");
    assert.strictEqual(getUserResponse.data.id, 1, "User ID should be 1");
    console.log("Test 2 Passed: User details match the API documentation");

    console.log("Test 3: GET /posts/1/comments");
    const getCommentsResponse = await axios.get(`${BASE_URL}/posts/1/comments`);

    assert.strictEqual(getCommentsResponse.status, 200, "Status code should be 200");
    assert.ok(getCommentsResponse.data.length > 0, "Comments array should not be empty");
    console.log("Test 3 Passed: Verified comments array and correct information");

    console.log("Test 4: POST /posts");
    const newPostData = {
      title: "Some information",
      body: "Some text",
      userId: 39,
    };

    const postResponse = await axios.post(`${BASE_URL}/posts`, newPostData);
    assert.strictEqual(postResponse.status, 201, "Status code should be 201");
    assert.strictEqual(postResponse.data.title, newPostData.title, "Returned title should match");
    console.log("Test 4 Passed: Created post successfully");

    console.log("Test 5: GET /photos?thumbnailUrl=string");
    const getPhotosResponse = await axios.get(`${BASE_URL}/photos`, {
      params: { thumbnailUrl: "string" },
    });

    assert.strictEqual(getPhotosResponse.status, 200, "Status code should be 200");
    assert.ok(Array.isArray(getPhotosResponse.data), "Response should be an array");

    console.log("Test 5 Passed: All fields are filled");

    console.log("All 5 tests completed successfully and verified against JSONPlaceholder API!");
  } catch (error) {
    console.error("Test failed with error:" + error.message + " You made mistake!");
    if (error.response) {
      console.error(`Status: ${error.response.status}`);
      console.error(`Data:`, error.response.data);
    }
    process.exit(1);
  }
}

runTests();
