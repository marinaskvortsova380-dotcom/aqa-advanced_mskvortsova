export class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    get title() {
        return this._title;
    }
    set title(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error("Title must be a non-empty string.");
        }
        this._title = value;
    }

    get author() {
        return this._author;
    }
    set author(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error("Author must be a non-empty string.");
        }
        this._author = value;
    }
    get year() {
        return this._year;
    }
    set year(value) {
        const currentYear = new Date().getFullYear();
        if (!Number.isInteger(value) || value < 0 || value > currentYear) {
            throw new Error(`Year must be a valid positive integer not greater than ${currentYear}.`);
        }
        this._year = value;
    }

    printInfo() {
        console.log(`Title: "${this.title}", Author: ${this.author}, Year: ${this.year}`);
    }

    static getOldestBook(books) {
        if (!Array.isArray(books) || books.length === 0) {
            return null;
        }
        return books.reduce((oldest, current) => {
            return current.year < oldest.year ? current : oldest;
        });
    }
}
