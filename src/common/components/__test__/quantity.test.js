import React from "react";
import {shallow} from "enzyme";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import {Quantity} from "../qunatity";

describe("Quantity", () => {
    let wrapper;
    let mockCallback = jest.fn()

    beforeEach(() => {
        wrapper = shallow(<Quantity callback={mockCallback}/>)
    });

    it("should render the quantity panel", () => {
        const quantityPanel = wrapper.find("#quantityPanel")

        expect(quantityPanel.text()).toEqual("Quantity0")
    });

    it("should render the increment button", () => {
        const incrementButton = wrapper.find("#incrementBtn")

        expect(incrementButton.type()).toEqual(Button)
        expect(incrementButton.childAt(0).type()).toEqual(AddIcon)
    });

    it("should increment quantity and call callback when clicked on increment button", () => {
        const incrementButton = wrapper.find("#incrementBtn")

        incrementButton.simulate("click")
        wrapper.update()

        expect(mockCallback).toHaveBeenCalledWith(1)
    });

    it("should render the decrement button", () => {
        const decrementButton = wrapper.find("#decrementBtn")

        expect(decrementButton.type()).toEqual(Button)
        expect(decrementButton.childAt(0).type()).toEqual(RemoveIcon)
    });

    it("should decrement quantity and call callback when clicked on increment button", () => {
        const decrementButton = wrapper.find("#decrementBtn")
        decrementButton.simulate("click")
        wrapper.update()

        expect(mockCallback).toHaveBeenCalledWith(0)
    });

    it("should not decrement quantity if it already zero", () => {
        const incrementButton = wrapper.find("#incrementBtn")
        incrementButton.simulate("click")
        wrapper.update()
        const decrementButton = wrapper.find("#decrementBtn")
        decrementButton.simulate("click")
        wrapper.update()
        decrementButton.simulate("click")
        wrapper.update()

        expect(mockCallback).toHaveBeenCalledWith(0)
    });
});
