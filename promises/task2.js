
function fetchTodo(){
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())
}

function fetchUser() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => response.json())

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
