// Creating an array of book objects
var books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", year: 1960 },
    { title: "1984", author: "George Orwell", genre: "Dystopian", year: 1949 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic", year: 1925 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Coming-of-age", year: 1951 },
    { title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance", year: 1813 }
];
// Printing information about each book
console.log("Information about books:");
books.forEach(function (book, index) {
    console.log("Book ".concat(index + 1, ":"));
    console.log("Title: ".concat(book.title));
    console.log("Author: ".concat(book.author));
    console.log("Genre: ".concat(book.genre));
    console.log("Year: ".concat(book.year));
    console.log("--------------------");
});
