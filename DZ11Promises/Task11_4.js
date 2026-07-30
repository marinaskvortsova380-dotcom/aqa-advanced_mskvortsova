
class ApiController {
    async fetchData(url) {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status} for URL: ${url}`);
        }
        return response.json();
    }
}

class JsonPlaceholderController extends ApiController {
    async getTodo() {
        return this.fetchData('https://jsonplaceholder.typicode.com/todos/1');
    }

    async getUser() {
        return this.fetchData('https://jsonplaceholder.typicode.com/users/1');
    }
}


const apiController = new JsonPlaceholderController();

(async () => {
    try {
        const allPromisesResult = await Promise.all([
            apiController.getTodo(),
            apiController.getUser()
        ]);
        const [todo, user] = allPromisesResult;
        console.log('--- Promise.all (Inherited Controllers) ---');
        console.log('Todo object:', todo);
        console.log('User object:', user);

        const racePromiseResult = await Promise.race([
            apiController.getTodo(),
            apiController.getUser()
        ]);
        console.log('\n--- Promise.race (Inherited Controllers) --- ');
        console.log('Winner object:', racePromiseResult);
    } catch (error) {
        console.error('Error:', error);
    }
})();