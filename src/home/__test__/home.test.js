import React from 'react';
import {shallow} from 'enzyme';
import Home from "../home";
import {BookCard} from "../../books/bookCard";
import {fetchBooks} from "../../api/booksApi";

const books = [{
    ID: "2",
    Title: "Data Smart",
    Author: "Foreman, John",
    Genre: "tech",
    SubGenre: "data_science",
    Price: "235",
    Publisher: "Wiley"
}]
jest.mock("../../api/booksApi", () => {
    return {
        fetchBooks: jest.fn().mockResolvedValue(books)
    }
})

describe("Home", () => {
    let wrapper;
    const classes = {root: "root"};

    beforeEach(() => {
        jest.spyOn(React, 'useEffect').mockImplementation(f => f());
        wrapper = shallow(<Home classes={classes}/>);
    });

    it("should render the books", () => {
        const main = wrapper.find("main")

        const booksList = main.childAt(0)

        expect(booksList.type()).toEqual(BookCard)
        expect(booksList.prop("books")).toEqual(books)
    });

    it("it should fetch books on load", () => {
        expect(fetchBooks).toHaveBeenCalled()
    });
});
