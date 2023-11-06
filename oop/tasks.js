const Book = require('./Book')
const Ebook = require('./Ebook')
// task 1

const roman = new Book ("Joanne Rowling", 2006, "Harry Potter")
const novel = new Book ("Jack London", 1902, "The Call of the Wild")

roman.printInfo()
novel.printInfo()

//task 2

const extendedRoman = new Ebook("Erich Maria Remarque", 1929, "All Quiet on the Western Front", "paper")
extendedRoman.printInfo()

//task 3
const newRoman = new Ebook
newRoman.author = 11
newRoman.year = "one"
newRoman.title = 22
newRoman.format = 33

//task 4
const books = [
 new Book ("Joanne Rowling", 2006, "Harry Potter"),
 new Book ("Jack London", 1902, "The Call of the Wild"),
 new Ebook("Erich Maria Remarque", 1829, "All Quiet on the Western Front", "paper")
]
const oldestBook = Book.findOldestBook(books)
console.log(`${oldestBook._title}, ${oldestBook._year}`)


//task 5
const bestRoman = new Book ("Erich Maria Remarque", 1929, "All Quiet on the Western Front", )
const extendedNewRoman = Ebook.fromBook(bestRoman, "PDF" )
console.log(extendedNewRoman)
