// An online bookstore keeps its catalog as an array of objects. Each
// object stores:
// - title of the book
// - author of the book
// Your task is to:
// - Create an array of at least three book objects.
// - Write a program that goes through the catalog and displays the
// titles of all available books.
let bookCatalog = [
    {
        title : "Dune",
        author : "Frank Hebert"
    },
    {
        title : "It",
        author : "Stephen King"
    },
    {
        title : "Emma",
        author : "Jane Austen"
    }

] // array of three book objects ( array of objects)
for(let i = 0 ; i < bookCatalog.length ; i++){
    console.log(bookCatalog[i].title);
}
