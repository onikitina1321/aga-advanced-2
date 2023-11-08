class Controller {
  static async fetchTodo () {
    const url1 = 'https://jsonplaceholder.typicode.com/todos/1'
    const response = await fetch(url1)
    return response.json()
  }

  static async fetchUser () {
    const url2 = 'https://jsonplaceholder.typicode.com/users/1'
    const response = await fetch(url2)
    return response.json()
  }
}

Promise.all([Controller.fetchTodo(), Controller.fetchUser()])
  .then(([todo, user]) => {
    console.log('promiseAllResult - todo', todo)
    console.log('promiseAllResult - user', user)
  })

Promise.race([Controller.fetchTodo(), Controller.fetchUser()])
  .then(result => {
    console.log('promiseRaceResult', result)
  })
