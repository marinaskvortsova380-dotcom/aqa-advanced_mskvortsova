
async function fetchTodo() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
}

async function fetchUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
}

(async () => {
    try {
        const allPromisesResult = await Promise.all([fetchTodo(), fetchUser()]);
        const [todo, user] = allPromisesResult;
        console.log('--- Promise.all (async/await) ---');
        console.log('Todo object:', todo);
        console.log('User object:', user);
        const racePromiseResult = await Promise.race([fetchTodo(), fetchUser()]);
        console.log('\n--- Promise.race (async/await) ---');
        console.log('Winner object:', racePromiseResult);
    } catch (error) {
        console.error('Error:', error);
    }
})();
