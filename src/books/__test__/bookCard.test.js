import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {shallow} from 'enzyme';
import {BookCard} from "../bookCard";

describe("Book Card", () => {
    let wrapper;
    const classes = {root: "root"};
    const books = [
        {
            Title: "Fundamentals of Wavelets",
            Author: "Goswami, Jaideva",
            Genre: "tech",
            SubGenre: "signal_processing",
            Height: "228",
            Publisher: "Wiley"
        },
        {
            Title: "Data Smart",
            Author: "Foreman, John",
            Genre: "tech",
            SubGenre: "data_science",
            Height: "235",
            Publisher: "Wiley"
        }]

    beforeEach(() => {
        wrapper = shallow(<BookCard books={books} classes={classes}/>)
    });

    it("should render the card for the books", () => {
        const card = wrapper.find("#book_1");

        expect(card.type()).toEqual(Card)
    });

    it("should render the content for the card", () => {
        const card = wrapper.find("#book_1");

        expect(card.text()).toEqual("Data SmartForeman, JohnBook in detail")
    });

    it("should render the card actions", () => {
        const card = wrapper.find("#book_1");
        const cardActions = card.find(CardActions)
        const button = cardActions.childAt(0);

        expect(button.type()).toEqual(Button)
        expect(button.text()).toEqual("Book in detail")
    });

});
