"use strict";

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = false;
    }

    issueBook() {
        if (this.isIssued) {
            console.log(this.title + " is already issued.");
        } else {
            this.isIssued = true;
            console.log(this.title + " issued successfully.");
        }
    }

    returnBook() {
        if (this.isIssued) {
            this.isIssued = false;
            console.log(this.title + " returned successfully.");
        } else {
            console.log(this.title + " was not issued.");
        }
    }
}

const books = [
    new Book("Java Basics", "James", "101"),
    new Book("Web Development", "John", "102"),
    new Book("Python Guide", "Alex", "103")
];

// Display available books
console.log("Available Books:");

books.filter(book => !book.isIssued)
    .forEach(book => console.log(book.title, book.isbn));

// Search by ISBN and issue a book
const searchISBN = "102";
const selectedBook = books.find(book => book.isbn === searchISBN);

if (selectedBook) {
    selectedBook.issueBook();
} else {
    console.log("Book not found.");
}

// Display available books again
console.log("Available after issue:");
books.filter(book => !book.isIssued)
    .forEach(book => console.log(book.title));