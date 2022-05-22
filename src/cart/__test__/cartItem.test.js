import React from "react";
import {shallow} from "enzyme";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import CartItem from "../cartItem";

const sampleBookImage = require("../../../static/sample_book.png")

describe("Cart Item", () => {
    let wrapper;
    const item = {
        ID: "2",
        Title: "Data Smart",
        Author: "Foreman, John",
        Genre: "tech",
        SubGenre: "data_science",
        Price: "235",
        Publisher: "Wiley",
        quantity: 2
    }
    const removeItemFromCartMock = jest.fn()

    beforeEach(() => {
        wrapper = shallow(<CartItem item={item} removeItemFromCart={removeItemFromCartMock}/>)
    });

    it("should render the default image for cart item", () => {
        const image = wrapper.find("#image2")

        expect(image.type()).toEqual("img")
        expect(image.prop("src")).toEqual(sampleBookImage)
    });

    it("should render the title", () => {
        const title = wrapper.find("#title")

        expect(title.text()).toEqual("Data Smart")
    });

    it("should render the price", () => {
        const price = wrapper.find("#price")

        expect(price.text()).toEqual("$235")
    });

    it("should render quantity", () => {
        const quantity = wrapper.find("#quantity")

        expect(quantity.text()).toEqual("2")
    });

    it("should render the subtotal", () => {
        const subtotal = wrapper.find("#subtotal")

        expect(subtotal.text()).toEqual("$470.00")
    });

    it("should render the delete button", () => {
        const deleteBtn = wrapper.find("#deleteBtn")

        expect(deleteBtn.type()).toEqual(IconButton)
        expect(deleteBtn.childAt(0).type()).toEqual(DeleteIcon)
    });

    it("should call remove item when clicked on delete button", () => {
        const deleteBtn = wrapper.find("#deleteBtn")

        deleteBtn.simulate("click", {preventDefault: jest.fn()})

        expect(removeItemFromCartMock).toHaveBeenCalledWith(item.ID)
    });
})
