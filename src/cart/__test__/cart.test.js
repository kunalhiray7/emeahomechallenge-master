import React from "react";
import {shallow} from "enzyme";
import Button from "@material-ui/core/Button";
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
        fetchAllItems: jest.fn().mockReturnValue(items),
        removeItemFromCart: jest.fn(),
        totalCartPrice: jest.fn().mockReturnValue(123),
        clear: jest.fn()
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

    it("should call cart service to remove item from cart", () => {
        const cartItem = wrapper.find(CartItem).at(0)
        cartItem.prop("removeItemFromCart")(items[0].ID)

        expect(CartService.removeItemFromCart).toHaveBeenCalledWith(items[0].ID)
        expect(CartService.fetchAllItems).toHaveBeenCalled()
    });

    it("should fetch total price of the cart", () => {
        expect(CartService.totalCartPrice).toHaveBeenCalled()
    });

    it("should render the clear cart button", () => {
        const clearCartBtn = wrapper.find("#clearCartBtn")

        expect(clearCartBtn.type()).toEqual(Button)
    });

    it("should call the service to clear the items from the cart", () => {
        const clearCartBtn = wrapper.find("#clearCartBtn")

        clearCartBtn.simulate("click", {preventDefault: jest.fn()})

        expect(CartService.clear).toHaveBeenCalled()
        expect(wrapper.find("#noItems").text()).toEqual("No Items in the cart!!")
    });
})
