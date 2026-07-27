"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    displayBook() {
        console.log("Title:", this.title);
        console.log("Author:", this.author);
        console.log("Pages:", this.pages);
    }
}
const book1 = new Book("The Alchemist", "Paulo Coelho", 208);
book1.displayBook();
