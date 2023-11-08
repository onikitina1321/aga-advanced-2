class Book {
  constructor (author, year, title) {
    this._author = author
    this._year = year
    this._title = title
  }

  static findOldestBook (books) {
    let oldestBook = null
    for (let i = 0; i < books.length; i++) {
      const book = books[i]
      if (!oldestBook || book._year < oldestBook._year) {
        oldestBook = book
      }
    }
    return oldestBook
  }

  get author () {
    return this._author
  }

  get year () {
    return this._year
  }

  get title () {
    return this._title
  }

  set author (newAuthor) {
    if (typeof newAuthor === 'string') {
      this._author = newAuthor
    } else {
      console.log('Incorrect author format')
    }
  }

  set year (newYear) {
    if (typeof newYear === 'number') {
      this._year = newYear
    } else {
      console.log('Incorrect year format')
    }
  }

  set title (newTitle) {
    if (typeof newTitle === 'string') {
      this._title = newTitle
    } else {
      console.log('Incorrect title format')
    }
  }

  printInfo () {
    console.log(`${this._author} published the book ${this._title} in ${this._year}`)
  }
}

module.exports = Book
