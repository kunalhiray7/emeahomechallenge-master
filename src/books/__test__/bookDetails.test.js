import React from "react";
import {shallow} from "enzyme";
import Card from "@material-ui/core/Card";
import {BookDetails} from "../bookDetails";
import {LabelWithValue} from "../../common/components/labelWithValue";
import {fetchBook} from "../../api/booksApi";

const book = {
    ID: "2",
    Title: "Data Smart",
    Author: "Foreman, John",
    Genre: "tech",
    SubGenre: "data_science",
    Price: "235",
    Publisher: "Wiley"
}
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
        id: book.ID
    })
}));
jest.mock("../../api/booksApi", () => {
    return {
        fetchBook: jest.fn().mockResolvedValue(book)
    }
})
describe("Book Details", () => {
    let wrapper, bookDetailsContainer, paper;

    beforeEach(() => {
        jest.spyOn(React, 'useEffect').mockImplementation(f => f());
        wrapper = shallow(<BookDetails/>)
        bookDetailsContainer = wrapper.find("#bookDetails")
        paper = bookDetailsContainer.childAt(1)
    });

    it("it should fetch book for given book ID on load", () => {
        expect(fetchBook).toHaveBeenCalledWith(book.ID)
    });

    it("should render the default book image", () => {
        const card = wrapper.find(Card)
        const cardMedia = card.childAt(0)

        expect(cardMedia.prop("image")).toEqual({default: ""})
    });

    it("should render the book details page's title", () => {
        expect(bookDetailsContainer.childAt(0).text()).toEqual(" by ")
    });

    it("should render the title of the book", () => {
        expect(paper.childAt(0).type()).toEqual(LabelWithValue)
        expect(paper.childAt(0).prop("label")).toEqual("Title")
        expect(paper.childAt(0).prop("value")).toEqual("")
        expect(paper.childAt(0).prop("fieldName")).toEqual("title")
    });

    it("should render the Author of the book", () => {
        expect(paper.childAt(1).type()).toEqual(LabelWithValue)
        expect(paper.childAt(1).prop("label")).toEqual("Author")
        expect(paper.childAt(1).prop("value")).toEqual("")
        expect(paper.childAt(1).prop("fieldName")).toEqual("author")
    });

    it("should render the Genre of the book", () => {
        expect(paper.childAt(2).type()).toEqual(LabelWithValue)
        expect(paper.childAt(2).prop("label")).toEqual("Genre")
        expect(paper.childAt(2).prop("value")).toEqual("")
        expect(paper.childAt(2).prop("fieldName")).toEqual("genre")
    });

    it("should render the Genre of the book", () => {
        expect(paper.childAt(3).type()).toEqual(LabelWithValue)
        expect(paper.childAt(3).prop("label")).toEqual("SubGenre")
        expect(paper.childAt(3).prop("value")).toEqual("")
        expect(paper.childAt(3).prop("fieldName")).toEqual("subgenre")
    });

    it("should render the Publisher of the book", () => {
        expect(paper.childAt(4).type()).toEqual(LabelWithValue)
        expect(paper.childAt(4).prop("label")).toEqual("Publisher")
        expect(paper.childAt(4).prop("value")).toEqual("")
        expect(paper.childAt(4).prop("fieldName")).toEqual("publisher")
    });

    it("should render the Price of the book", () => {
        expect(paper.childAt(5).type()).toEqual(LabelWithValue)
        expect(paper.childAt(5).prop("label")).toEqual("Price")
        expect(paper.childAt(5).prop("value")).toEqual("$0")
        expect(paper.childAt(5).prop("fieldName")).toEqual("price")
    });
});
