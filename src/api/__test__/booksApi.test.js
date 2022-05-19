import {fetchBook, fetchBooks} from "../booksApi";

describe("Books API", () => {
    const books = [{
        ID: "2",
        Title: "Data Smart",
        Author: "Foreman, John",
        Genre: "tech",
        SubGenre: "data_science",
        Price: "235",
        Publisher: "Wiley"
    }]

    beforeEach(() => {
        fetch.resetMocks()
    });

    it("should fetch books", async () => {
        fetch.mockResponseOnce(JSON.stringify(books));
        const fetchedBooks = await fetchBooks()

        expect(fetchedBooks).toEqual(books)
        expect(fetch).toHaveBeenCalled()
    });

    it("should fetch book for given id", async () => {
        fetch.mockResponseOnce(JSON.stringify(books[0]));
        const fetchedBook = await fetchBook(2)

        expect(fetchedBook).toEqual(books[0])
        expect(fetch).toHaveBeenCalled()
    });
});
