import React from "react";
import {shallow} from "enzyme";
import Typography from "@material-ui/core/Typography";
import {LabelWithValue} from "../labelWithValue";

describe("Label with value", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<LabelWithValue label="Title" value="Building Microservices" fieldName="title"/>)
    });

    it("should render the label", () => {
        const label = wrapper.find("#titleLabel")

        expect(label.type()).toEqual(Typography)
        expect(label.text()).toEqual("Title")
    });

    it("should render the value", () => {
        const value = wrapper.find("#titleValue")

        expect(value.type()).toEqual(Typography)
        expect(value.text()).toEqual("Building Microservices")
    });
});
