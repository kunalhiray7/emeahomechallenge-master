import React from 'react';
import {shallow} from 'enzyme';
import Home from "../home";
import {Error} from "../../common/components/error";

jest.mock("../../api/booksApi", () => {
    return {
        fetchBooks: jest.fn().mockRejectedValue({message: "Error"})
    }
})

describe("Home - Error", () => {
    let wrapper;
    const classes = {root: "root"};

    beforeEach(() => {
        jest.spyOn(React, 'useEffect').mockImplementation(f => f());
        wrapper = shallow(<Home classes={classes}/>);
    });

    it("should render the erro when failed to fetch book", () => {
        const error = wrapper.find("#error")

        expect(error.type()).toEqual(Error)
        expect(error.prop("message")).toEqual("Error while fetching books! - Error")
    });
});
