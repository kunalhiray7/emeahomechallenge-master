import React from "react";
import {shallow} from "enzyme";
import {Cart} from "../cart";
import CartService from "../cartService";
import CartItem from "../cartItem";

const items = [
    {
        ID: "1",
        Title: "Data Smart",
        Author: "Foreman, John",
        Genre: "tech",
        SubGenre: "data_science",
        Price: "235",
        Publisher: "Wiley",
        quantity: 2
    },
    {
        ID: "2",
        Title: "Data Smart",
        Author: "Foreman, John",
        Genre: "tech",
        SubGenre: "data_science",
        Price: "235",
        Publisher: "Wiley",
        quantity: 3
    }
]

jest.mock("../cartService", () => {
    return {
        fetchAllItems: jest.fn().mockReturnValue(items)
    }
})
describe("Cart", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Cart/>)
    });

    it("should call the cart service to load the items in the cart on load", () => {
        expect(CartService.fetchAllItems).toHaveBeenCalled()
    });

    it("should render all the items in the in the cart", () => {
        const cartItems = wrapper.find(CartItem)

        expect(cartItems.at(0).prop("item")).toEqual(items[0])
        expect(cartItems.at(1).prop("item")).toEqual(items[1])
    });

})
