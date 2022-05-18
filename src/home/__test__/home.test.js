import React from 'react';
import {shallow} from 'enzyme';
import Home from "../home";
import {BookCard} from "../../books/bookCard";

describe("Home", () => {
    let wrapper;
    const classes = {root: "root"};

    beforeEach(() => {
        wrapper = shallow(<Home classes={classes}/>);
    });

    it("should render the books", () => {
        const main = wrapper.find("main")

        const books = main.childAt(0)

        expect(books.type()).toEqual(BookCard)
        expect(books.prop("books")).toEqual({})
    });
});
