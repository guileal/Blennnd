export class Book {
    constructor(title, author, year, genres, rating) {
        this.title = title
        this.author = author
        this.year = year
        this.genres = genres
        this.rating = rating
    }

    getTitle() {
        return this.title
    }
}

const Book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925, ['Fiction', 'Classic'], 4.5)

console.log(Book1)