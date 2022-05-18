import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {shallow} from "enzyme";
import React from "react";
import NavBar from "../navBar";

describe("Nav Bar", () => {
    let wrapper;
    const classes = {root: "root"};

    beforeEach(() => {
        wrapper = shallow(<NavBar classes={classes}/>);
    });

    it("should render App bar", () => {
        const appBar = wrapper.find("#appBar");

        expect(appBar.type()).toEqual(AppBar);
    });

    it("appBar should have menu", () => {
        const appBar = wrapper.find("#appBar");

        const menu = appBar.find(IconButton).childAt(0)

        expect(menu.type()).toEqual(MenuIcon)
    });

    it("appBar should have correct title", () => {
        const appBar = wrapper.find("#appBar");

        const title = appBar.find(Typography)

        expect(title.text()).toEqual("Book Shop")
    });

    it("appBar should have Cart button", () => {
        const appBar = wrapper.find("#appBar");

        const cartButton = appBar.find(Button)

        expect(cartButton.text()).toEqual("Cart")
    });
});
