const user = [
  {
    name: 'Olena',
    age: 31,
    email: 'adhellam@gmail.com'
  },
  {
    name: 'Olha',
    age: 11,
    email: 'olha@gmail.com'
  },
  {
    name: 'Max',
    age: 18,
    email: 'max@gmail.com'
  }
]

for (const { name, age, email } of user) {
  console.log(`${name} is ${age} years old and has email address ${email}`)
}
