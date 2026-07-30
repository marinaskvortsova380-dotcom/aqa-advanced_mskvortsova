
function fetchTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        });
}

function fetchUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        });
}


const allPromisesResult = Promise.all([fetchTodo(), fetchUser()]);

allPromisesResult
    .then(results => {
        const [todo, user] = results;
        console.log('--- Promise.all ---');
        console.log('Todo object:', todo);
        console.log('User object:', user);
    })
    .catch(error => {
        console.error('Promise.all error:', error);
    });


const racePromiseResult = Promise.race([fetchTodo(), fetchUser()]);

racePromiseResult
    .then(winner => {
        console.log('\n--- Promise.race (First completed) ---');
        console.log('Winner object:', winner);
    })
    .catch(error => {
        console.error('Promise.race error:', error);
    });
