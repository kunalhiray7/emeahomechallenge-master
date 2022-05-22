import React from "react";
import {shallow} from "enzyme";
import MuiAlert from "@material-ui/lab/Alert";
import {Error} from "../error";

describe("Error", () => {
    let wrapper;
    const errorMessage = "Error occurred!!"

    beforeEach(() => {
        wrapper = shallow(<Error message={errorMessage}/>)
    });

    it("should render error", () => {
        const error = wrapper.find(MuiAlert)

        expect(error.prop("severity")).toEqual("error")
        expect(error.text()).toEqual(errorMessage)
    });
})
