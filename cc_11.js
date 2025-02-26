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
const book1 = new Book('The Alchemist', 'Paulo Coelho', 1337, 5); // Task 1
console.log(book1.getDetails()); // Task 1
book1.updateCopies(-1); // Task 1
console.log(book1.getDetails()); // Task 1

console.log(`---------- Task 1 - End ----------`)

// Task 2 - Created Borrower Class
class Borrower {
    constructor(name, borrowId) {
        this.name = name;
        this.borrowId = borrowId;
        this.borrowedBooks = [];
    }

    borrowBook(book) {
        this.borrowedBooks.push(book);
    }

    returnBook(book) {
        this.borrowedBooks = this.borrowedBooks.filter(b => b !== book);
    }
}

// Test Case
const borrower1 = new Borrower('John Doe', 1234); // Task 2
borrower1.borrowBook(`The Alchemist`); // Task 2
console.log(borrower1.borrowedBooks); // Task 2
borrower1.returnBook(`The Alchemist`); // Task 2
console.log(borrower1.borrowedBooks); // Task 2

console.log(`---------- Task 2 - End ----------`)

// Task 3 - Created Library Class
class Library {
    constructor() {
        this.books = [];
        this.borrowers = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    listBooks() {
        this.books.forEach(book => console.log(book.getDetails()));
    }
    
    // Task 4 - Implementing Book Borrowing System  
    lendBook(borrowerId, isbn) {
        const book = this.books.find(b => b.isbn === isbn && b.copies > 0);
        const borrower = this.borrowers.find(b => b.borrowId === borrowerId);

        if (book && borrower) {
            book.updateCopies(-1);
            borrower.borrowBook(book.title);
        } else {
            console.log(`Book not found or borrower not found`);}
    }
}

// Test Case
const library = new Library(); // Task 3
library.addBook(book1); // Task 3
library.borrowers.push(borrower1); // Task 3
library.listBooks(); // Task 3

console.log(`---------- Task 3 - End ----------`)

// Task 4 - Implementing Book Borrowing System
// Test Case
library.lendBook(1234, 1337); // Task 4
console.log(book1.getDetails()); // Task 4
console.log(borrower1.borrowedBooks); // Task 4
