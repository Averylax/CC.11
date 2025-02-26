console.log(`cc_11.js has succesfully been loaded`)
// Task 1 - Created Book Class
class Book {
    constructor(title, author, isbn, copies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    }
    // Task 1
    getDetails() {
        return `Title: ${this.title}, \nAuthor: ${this.author}, \nISBN: ${this.isbn}, \nCopies: ${this.copies}`;
    }
    // Task 2
    updateCopies(quantity) {
        this.copies += quantity;
    }
}

// Test Case
const book1 = new Book('The Alchemist', 'Paulo Coelho', '1337', 5);
console.log(book1.getDetails());
book1.updateCopies(-1);
console.log(book1.getDetails());


