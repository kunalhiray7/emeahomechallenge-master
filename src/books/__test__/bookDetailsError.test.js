import React from "react";
import {shallow} from "enzyme";
import {BookDetails} from "../bookDetails";
import {Error} from "../../common/components/error";

jest.mock("../../api/booksApi", () => {
    return {
        fetchBook: jest.fn().mockRejectedValue({message: "failed to fetch"})
    }
})
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
        id: 1
    })
}));
jest.mock("../../cart/cartService", () => {
    return {
        addItemToCart: jest.fn()
    }
});
describe("Book Details - Error", () => {
    let wrapper;

    beforeEach(() => {
        jest.spyOn(React, 'useEffect').mockImplementation(f => f());
        wrapper = shallow(<BookDetails/>)
    });

    it("should render the erro when failed to fetch book", () => {
        const error = wrapper.find("#error")

        expect(error.type()).toEqual(Error)
        expect(error.prop("message")).toEqual("Error while fetching book details! - failed to fetch")
    });
});
