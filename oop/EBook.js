const Book = require('./Book')
class Ebook extends Book {
  constructor (author, year, title, format) {
    super(author, year, title)
    this._format = format
  }

  static findOldestBook (books) {
    return super.findOldestBook(books)
  }

  static fromBook (book, format) {
    return new Ebook(book.author, book.year, book.title, format)
  }

  get format () {
    return this._format
  }

  set format (newFormat) {
    if (typeof newFormat === 'string') {
      this._format = newFormat
    } else {
      console.log('Incorrect format')
    }
  }

  printInfo () {
    super.printInfo(`The first book format was ${this._format}`)
    console.log(`The first book format was ${this._format}`)
  }
}

module.exports = Ebook
