import { Book } from "./Book.js";
import { EBook } from "./EBook.js";

console.log("--- Books Info ---");
const book1 = new Book("How Google Tests Software", "James Whittaker", 2012);
const book2 = new Book("How to break software", "James Whittaker", 2002);
const book3 = new Book("The housemaid", "Freida McFadden", 2022);

book1.printInfo();
book2.printInfo();
book3.printInfo();

console.log("\n--- EBook Info ---");
const ebook1 = new EBook("The housemaids secret", "Freida McFadden", 2023, "EPUB");
ebook1.printInfo();

console.log("\n--- Getters and Setters Demonstration ---");

console.log(`Original year of book1: ${book1.year}`);

book1.year = 2015;
console.log(`Updated year of book1: ${book1.year}`);

console.log("\n--- Найдавніша книга ---");
const booksArray = [book1, book2, book3, ebook1];
const oldestBook = Book.getOldestBook(booksArray);
if (oldestBook) {
  oldestBook.printInfo();
}

console.log("\n--- Створення EBook з Book ---");
const ebookFromBook = EBook.fromBook(book2, "PDF");
ebookFromBook.printInfo();
