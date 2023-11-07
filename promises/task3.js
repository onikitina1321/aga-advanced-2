const url1 = "https://jsonplaceholder.typicode.com/todos/1";
const url2 = "https://jsonplaceholder.typicode.com/users/1";

async function fetchTodo() {
    const response = await fetch(url1);
    return response.json();
}

async function fetchUser() {
    const response = await fetch(url2);
    return response.json();
}

Promise.all([fetchTodo(), fetchUser()])
    .then (([todo, user]) => {
        console.log("promiseAllResult - todo", todo)
        console.log("promiseAllResult - user", user)
    })

Promise.race ([fetchTodo(), fetchUser()])
    .then (result => {
        console.log("promiseRaceResult", result)
    })