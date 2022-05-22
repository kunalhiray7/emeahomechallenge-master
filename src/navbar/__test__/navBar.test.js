import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {shallow} from "enzyme";
import React from "react";
import NavBar from "../navBar";
import {paths} from "../../common/constants/constants";


const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));
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
        const menuBtn = wrapper.find("#menuBtn");

        const menu = menuBtn.childAt(0)

        expect(menu.type()).toEqual(MenuIcon)
    });

    it("appBar should have correct title", () => {
        const appBar = wrapper.find("#appBar");

        const title = appBar.find(Typography)

        expect(title.text()).toEqual("Book Shop")
    });

    it("appBar should have Cart button", () => {
        const cartButton = wrapper.find("#cartBtn");

        expect(cartButton.childAt(0).type()).toEqual(ShoppingCartIcon)
    });

    it("should navigate to cart page when clicked on cart button", () => {
        const cartButton = wrapper.find("#cartBtn");

        cartButton.simulate("click", {preventDefault: jest.fn()})

        expect(mockedUsedNavigate).toHaveBeenCalledWith(paths.CART);
    });

    it("should render the menu", () => {
        const menu = wrapper.find("#bookShopMenu")

        expect(menu.type()).toEqual(Menu)
    });

    it("should render Home in the menu", () => {
        const menu = wrapper.find("#bookShopMenu")
        const homeMenu = menu.childAt(0)

        expect(homeMenu.type()).toEqual(MenuItem)
        expect(homeMenu.text()).toEqual("Home")
    });

    it("should render Cart in the menu", () => {
        const menu = wrapper.find("#bookShopMenu")
        const cartMenu = menu.childAt(1)

        expect(cartMenu.type()).toEqual(MenuItem)
        expect(cartMenu.text()).toEqual("Cart")
    });

    it("should navigate to home when clicked on Home menu", () => {
        const menu = wrapper.find("#bookShopMenu")
        const homeMenu = menu.childAt(0)

        homeMenu.simulate("click", {preventDefault: jest.fn()})

        expect(mockedUsedNavigate).toHaveBeenCalledWith(paths.HOME);
    });

    it("should navigate to home when clicked on Cart menu", () => {
        const menu = wrapper.find("#bookShopMenu")
        const cartMenu = menu.childAt(1)

        cartMenu.simulate("click", {preventDefault: jest.fn()})

        expect(mockedUsedNavigate).toHaveBeenCalledWith(paths.CART);
    });
});
